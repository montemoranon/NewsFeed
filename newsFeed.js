class NewsItem {
    constructor(title, link, date) {
        this.title = title;
        this.link = link;
        this.date = date;
    }
}

function onPageLoad() {
    generateXMLHTTPRequest(generateESPNItems, 'http://www.espn.com/espn/rss/nfl/news');
    generateXMLHTTPRequest(generateCNNItems, 'https://crossorigin.me/http://wxdata.weather.com/wxdata/weather/rss/local/14564');
}

function generateXMLHTTPRequest(func, url) {
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
            func(xmlhttp);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function generateESPNItems(xmlhttp) {
    var xmlDoc = xmlhttp.responseXML;
    var items = xmlDoc.getElementsByTagName("item");
    var parentList = document.getElementById("ESPNList");

    for (var i = 0; i < items.length; i++) {
        var listItem = document.createElement("li");

        listItem.textContent = items[i].childNodes[0].textContent;
        listItem.classList.add("list-group-item");

        parentList.appendChild(listItem);
    }
}

function generateCNNItems(xmlhttp) {
    /*
    var xmlDoc = xmlhttp.responseXML;
    var weatherItems = xmlDoc.getElementsByTagName("item");
    var numberOfItems = weatherItems.length;

    for (var i=0; i <= numberOfItems; i++) {
        var weatherItem = weatherItems[i];
        var listItem = document.createElement("li");

        listItem.innerHTML = weatherItem.textContent;

        var parentList = document.getElementById("WeatherList");

        parentList.appendChild(listItem);
    }
    */

    var parser = new DOMParser();
    xmlDoc = 
}