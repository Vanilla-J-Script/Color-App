//Single Colors

function btnColor(color) {
  document.getElementById("circleID").style.backgroundColor=color; }


//Random Colors
var color = ["red","blue","green","white","black"];
 
document.getElementById("btnRandom").addEventListener(
    'click', function onClick() {
 
        document.getElementById("circleID").style.backgroundColor
            = color[(Math.floor(Math.random() * color.length))];
    })

