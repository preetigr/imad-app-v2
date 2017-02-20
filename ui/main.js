var button = document.getElementById('counter');
button.onclick = function () {
    var req = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readystate ==XMLHttpRequest.Done) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http//:preetigr.imad.hasura-app.io/counter', true);
  request.send(null);  
};