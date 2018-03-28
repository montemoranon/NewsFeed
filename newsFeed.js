class NewsItem {
    constructor(title, link, date) {
        this.title = title;
        this.link = link;
        this.date = date;
    }
}

function generateESPNItems() {
    var xmlhttp = null;

    if (window.XMLHttpRequest) {
        // code for IE7+ and all others
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for older versions of IE
        xmlhttp = new ActiveXObject();
    }
    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var xmlDoc = xmlhttp.responseXML;
            var items = xmlDoc.getElementsByTagName("item");
            var parentList = document.getElementById("ESPNList");

            for (var i = 0; i < items.length; i++) {
                var listItem = document.createElement("li");
                listItem.textContent = items[i].childNodes[0].textContent;
                parentList.appendChild(listItem);
            }
        }
    }

    xmlhttp.open("GET", 'http://www.espn.com/espn/rss/nfl/news', true);
    xmlhttp.send();
}

function generateCNNItems() {
}