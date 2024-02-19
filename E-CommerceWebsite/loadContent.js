function loadAsync(url, elementId) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                document.getElementById(elementId).innerHTML = req.responseText;
            } else {
                console.error('Error loading ' + url + ': ' + req.status);
            }
        }
    };
    req.open("GET", url, true); // asynchronous request
    req.send(null);
}
