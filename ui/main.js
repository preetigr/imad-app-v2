console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'bon jour';

var img= document.getElementById('madi');
var marginLeft = 0;
fuction moveRight() {
    marginLeft= marginLeft + 1;
img.style.marginLeft= marginLeft+'px';
}
img.onclick = fuction() {
    var interval= setInterval(moveRight, 50);
}