$(document).ready(function() {
    $("#favorites-list-button").click(function() {
        $.ajax({
            method: "GET",
            url: "getFavorites.php",
            datatype: "json",
            success: function(data) {
                loadFavorites(data);
            }
        })
    })
})

function loadFavorites(data) {
    for (var link in data) {
        if (data.hasOwnProperty(link)) {
          var textDatePair = data[link];
          console.log(val);
        }
    }
}

// var text = aggregateNewsItems[i]["text"];
// var linkText = aggregateNewsItems[i]["url"]
// var date = new Date(aggregateNewsItems[i]["date"]);

// var link = document.createElement("a");

// link.setAttribute("href", linkText);
// link.setAttribute("class", "news-element");

// var singleItem = document.createElement("div");

// var listItem = document.createElement("li");
// listItem.innerHTML = text + " - " + date.toLocaleDateString('en-US');

// link.appendChild(listItem);

// var likeButton = createLikeButton();
// likeButton.childNodes[0].setAttribute("data-text", text);
// likeButton.childNodes[0].setAttribute("data-link", linkText);
// likeButton.childNodes[0].setAttribute("data-date", date);

// singleItem.appendChild(link);
// singleItem.appendChild(likeButton);

// htmlListItem.appendChild(singleItem);

// document.getElementById("topNewsItemsDiv").appendChild(htmlListItem);