var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://freegeoip.net/xml/4.2.2.2", false);
xmlhttp.onreadystatechange = function(event) {

    var xmlDoc = event.target.responseXML;
    console.log(xmlDoc);
    var from = xmlDoc.getElementsByTagName("CountryName")[0].childNodes[0];
    console.log(from);
}

xmlhttp.send();
