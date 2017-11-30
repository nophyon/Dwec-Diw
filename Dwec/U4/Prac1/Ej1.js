"use strict"

function forma1(e){
  e.target.innerHTML = 'Esta es la forma 1';
  e.target.style.color = 'red';
}

onload = function(){
  div.oncontextmenu = function(e){
    e.preventDefault();
    e.target.innerHTML = "Esta es la forma 3";
  }

  function forma4(e){
    e.target.innerHTML = 'Forma 4 esta es';


  }
  h2.ondblclick = forma4;

  var varh2 = document.getElementsByTagName('h3')[0];
  varh2.addEventListener("mouseover",function(e){
    this.innerHTML = "Esta es la última forma";
  })
}
