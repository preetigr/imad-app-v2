var button = document.getElementById('counter');

button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readystate ===XMLHttpRequest.Done) {
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

var nameinput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
      var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readystate ===XMLHttpRequest.Done) {
            if (request.status === 200) {
                var names = ['name1', 'name2', 'name3'];
                var list = '';
                for(var i=0; i<name.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
                }
                
               
            }
        };

    request.open('GET', 'http//:preetigr.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);  
    
   
};
