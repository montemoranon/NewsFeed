function sportRSS(sport) {
    $.ajax({
        url: 'http://www.espn.com/espn/rss/' + sport + '/news',
        success: function (data) {
            if (document.contains(document.getElementById("headerText"))) {
                document.getElementById("headerText").remove();
                document.getElementById("topNewsItems").remove();
            }

            var header = document.createElement("h5");
            var sportsDiv = document.getElementById("sportsHeader");

            header.setAttribute("id", "headerText");
            header.innerHTML = "Top 5 " + sport.toUpperCase() + " News Items";
            sportsDiv.appendChild(header);

            var items = data.getElementsByTagName("item");
            var parentList = document.createElement("ul");

            parentList.setAttribute("id", "topNewsItems");
            var newsItems = new Array();

            for (var i = 0; i < items.length; i++) {
                // create a single news item with each iteration, a list of objects
                var newsItem = new Array();

                var text = items[i].childNodes[0].textContent;
                newsItem.push(text);

                var url = items[i].childNodes[2].innerHTML;
                url = htmlWithCDATASectionsToHtmlWithout(url);
                newsItem.push(url);

                var date = items[i].childNodes[3].innerHTML;
                newsItem.push(date);

                newsItems.push(newsItem);
                console.log(newsItems);
            }

            // place each newsItem in chronological order in list
            /* for (var i = 0; i < 5; i++) {
                var link = document.createElement("a");
                var listItem = document.createElement("li");

                listItem.textContent = items[i].childNodes[0].textContent;
                listItem.classList.add("list-group-item");

                var linkURL = items[i].childNodes[2].innerHTML;
                linkURL = htmlWithCDATASectionsToHtmlWithout(linkURL);

                link.setAttribute("href", linkURL);

                link.appendChild(listItem);
                parentList.appendChild(link);
            } */

            document.getElementById("topNewsItemsDiv").appendChild(parentList);
        },
        async: true
    })
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
