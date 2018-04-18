var aggregateNewsItems = new Array();

document.addEventListener("DOMContentLoaded", function() {
    loadSingleSportNews('nfl');
    loadSingleSportNews('nhl');
    loadSingleSportNews('nba');

    orderNewsItemsBeforeDisplay();

    displayNewsItems();
})

function loadSingleSportNews(sport) {
    $.ajax({
        url: 'http://www.espn.com/espn/rss/' + sport + '/news',
        success: function (data) {
            var items = data.getElementsByTagName("item");
            var newsItems = new Array();

            for (var i = 0; i < items.length; i++) {
                // create a single news item with each iteration, a list of objects
                var newsItem = {};

                var text = items[i].childNodes[0].textContent;
                newsItem["text"] = text;

                var url = items[i].childNodes[2].innerHTML;
                url = htmlWithCDATASectionsToHtmlWithout(url);
                newsItem["url"] = url;

                var date = items[i].childNodes[3].innerHTML;
                newsItem["date"] = date;

                newsItems.push(newsItem);
            }

            addItemsToAggregate(newsItems);
        },
        async: false
    })
}

// takes a list of newsItem objects and adds them to the aggregate list
function addItemsToAggregate(itemsToAdd) {
    for (var i = 0; i < itemsToAdd.length; i++) {
        aggregateNewsItems.push(itemsToAdd[i]);
    }
	console.log(aggregateNewsItems);
}

// sorts the aggregate list by date before display
function orderNewsItemsBeforeDisplay() {
    aggregateNewsItems.sort(function(a, b) {
        return new Date(b["date"]) - new  Date(a["date"]);
    })
}

// places the aggregate news items on the page
function displayNewsItems() {
    var htmlListItem = document.createElement("ul");

    if (aggregateNewsItems.length == 0) {
        var noContentHeading = document.createElement("p");
        noContentHeading.innerHTML = "You don't have any sports selected!";
        document.getElementById("topNewsItemsDiv").appendChild(noContentHeading);
    }
    else {
        for (var i = 0; i < aggregateNewsItems.length; i++) {
            var link = document.createElement("a");
            link.setAttribute("href", aggregateNewsItems[i]["url"]);
            link.setAttribute("class", "news-element");

            var date = new Date(aggregateNewsItems[i]["date"]);

			var singleItem = document.createElement("div");

            var listItem = document.createElement("li");
            listItem.innerHTML = aggregateNewsItems[i]["text"] + " - " + date.toLocaleDateString('en-US');

            link.appendChild(listItem);

            var likeButton = createLikeButton();

			singleItem.appendChild(link);
			singleItem.appendChild(likeButton);

			htmlListItem.appendChild(singleItem);

            document.getElementById("topNewsItemsDiv").appendChild(htmlListItem);
        }
    }
}

function reloadNewsItems() {
    var listOfSports = new Array();

    if (document.getElementById('nfl-check-box').checked) {
        listOfSports.push('nfl');
    }

    if (document.getElementById('nhl-check-box').checked) {
        listOfSports.push('nhl');
    }
    if (document.getElementById('nba-check-box').checked) {
        listOfSports.push('nba');
    }

    aggregateNewsItems = [];
    document.getElementById("topNewsItemsDiv").innerHTML = "";

    for (var i = 0; i < listOfSports.length; i++) {
        loadSingleSportNews(listOfSports[i]);
    }

    orderNewsItemsBeforeDisplay();
    displayNewsItems();
}

function createLikeButton() {
    var label = document.createElement("label");

    var button = document.createElement("input");
    button.setAttribute("type", "checkbox");
    button.setAttribute("value", "");
    button.setAttribute("class", "news-element");
	button.setAttribute("style", "margin-left:10px; margin-top: 6px;")	

    label.appendChild(button);

    return label;
}

// copy pasted from https://stackoverflow.com/questions/7065615/innerhtml-converts-cdata-to-comments
function htmlWithCDATASectionsToHtmlWithout(html) {
    var ATTRS = "(?:[^>\"\']|\"[^\"]*\"|\'[^\']*\')*",
        // names of tags with RCDATA or CDATA content.
        SCRIPT = "[sS][cC][rR][iI][pP][tT]",
        STYLE = "[sS][tT][yY][lL][eE]",
        TEXTAREA = "[tT][eE][xX][tT][aA][rR][eE][aA]",
        TITLE = "[tT][iI][tT][lL][eE]",
        XMP = "[xX][mM][pP]",
        SPECIAL_TAG_NAME = [SCRIPT, STYLE, TEXTAREA, TITLE, XMP].join("|"),
        ANY = "[\\s\\S]*?",
        AMP = /&/g,
        LT = /</g,
        GT = />/g;
    return html.replace(new RegExp(
        // Entities and text
        "[^<]+" +
        // Comment
        "|<!--"+ANY+"-->" +
        // Regular tag
        "|<\/?(?!"+SPECIAL_TAG_NAME+")[a-zA-Z]"+ATTRS+">" +
        // Special tags
        "|<\/?"+SCRIPT  +"\\b"+ATTRS+">"+ANY+"<\/"+SCRIPT  +"\\s*>" +
        "|<\/?"+STYLE   +"\\b"+ATTRS+">"+ANY+"<\/"+STYLE   +"\\s*>" +
        "|<\/?"+TEXTAREA+"\\b"+ATTRS+">"+ANY+"<\/"+TEXTAREA+"\\s*>" +
        "|<\/?"+TITLE   +"\\b"+ATTRS+">"+ANY+"<\/"+TITLE   +"\\s*>" +
        "|<\/?"+XMP     +"\\b"+ATTRS+">"+ANY+"<\/"+XMP     +"\\s*>" +
        // CDATA section.  Content in capturing group 1.
        "|<!\\[CDATA\\[("+ANY+")\\]\\]>" +
        // A loose less-than
        "|<", "g"),

        function (token, cdataContent) {
            return "string" === typeof cdataContent
                ? cdataContent.replace(AMP, "&amp;").replace(LT, "&lt;")
                    .replace(GT, "&gt;")
                : token === "<"
                    ? "&lt;"  // Normalize loose less-thans.
                    : token;
        });
}
