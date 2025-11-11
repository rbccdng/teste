function modo(){
document.body.classList.toggle("darkmode");
}

let modal = document.getElementById("modal")

function abrir(){
    modal.showModal()
}

function fechar(){
    modal.close()
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}