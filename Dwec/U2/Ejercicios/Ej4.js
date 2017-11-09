"use strict"

  function modificarSize (){
    var elementh1 = document.querySelector("h1");
    var elementsp = document.querySelectorAll("p")

    for (var i = 0; i < elementsp.length; i++) {
      elementsp[i].style.fontSize = document.getElementById("combo").value;
    }
    elementh1.style.fontSize = document.getElementById("combo").value;
  }
// var elements = document.querySelectorAll("h1","p");
// for (var i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }
