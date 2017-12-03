var pista = document.getElementsByClassName('tooltiptext');
var present = document.getElementsByClassName('present');
var img = document.getElementsByTagName('img');

for (var i = 0; i < pista.length; i++) {
  pista[i].style.display = "none";
  }

function showPista1 (){
  pista[0].style.display = "block";
}

function showPista2 (){
  pista[1].style.display = "block";
}

function showPista3 (){
  pista[2].style.display = "block";
}

function alert1 (){
  alert ("Te has ganado un perro!");
}

function alert2 (){
  alert ("Te has ganado un gato!");
}

function alert3 (){
  alert ("Te has ganado una preciosa iguana!");
}

function showPresent1 (){
  img[0].style.display = "block";
  present[0].style.display = "none";
  present[1].removeEventListener("click", alert2);
  present[1].addEventListener("click",alert1);
  present[1].removeEventListener("click", showPresent2);
  present[2].removeEventListener("click", alert3);
  present[2].addEventListener("click", alert1);
  present[2].removeEventListener("click", showPresent3);
}

function showPresent2 (){
  img[1].style.display = "block";
  present[1].style.display = "none";
  present[0].removeEventListener("click", alert1);
  present[0].addEventListener("click", alert2);
  present[0].removeEventListener("click", showPresent1);
  present[2].removeEventListener("click", alert3);
  present[2].addEventListener("click", alert2);
  present[2].removeEventListener("click", showPresent3);

}

function showPresent3 (){
  img[2].style.display = "block";
  present[2].style.display = "none";
  present[0].removeEventListener("click", alert1);
  present[0].addEventListener("click", alert3);
  present[0].removeEventListener("click", showPresent1);
  present[1].removeEventListener("click", alert2);
  present[1].addEventListener("click",alert3);
  present[1].removeEventListener("click", showPresent2);
}

for (var i = 0; i < present.length; i++) {
  present[i].oncontextmenu = function (e){
    e.preventDefault();
  }
}




present[0].addEventListener("contextmenu",showPista1);
present[0].addEventListener("click", alert1);
present[0].addEventListener("click", showPresent1);
present[1].addEventListener("contextmenu",showPista2);
present[1].addEventListener("click", alert2);
present[1].addEventListener("click", showPresent2);
present[2].addEventListener("contextmenu",showPista3);
present[2].addEventListener("click", alert3);
present[2].addEventListener("click", showPresent3);
