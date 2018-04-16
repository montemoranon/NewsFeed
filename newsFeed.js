function onPageLoad() {
    generateXMLHTTPRequest(generateESPNItems, 'http://www.espn.com/espn/rss/nfl/news');
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
