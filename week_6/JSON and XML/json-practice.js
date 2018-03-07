var request = new XMLHttpRequest();
request.open('GET', 'http://freegeoip.net/json/4.2.2.2', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        console.log(request.responseText);

        var data = JSON.parse(request.responseText);
        console.log(data);
    } else {
        // We reached our target server, but it returned an error

    }
};

request.onerror = function () {
    // There was a connection error of some sort
};

request.send();