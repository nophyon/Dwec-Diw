
var tag =document.getElementsByTagName("p");

  for (var i = 0; i < tag.length; i++) {
    tag[i].innerHTML = "Este parrafo es el numero " + (i+1);
  }

  function recorreTag(){
        
  var color =  document.getElementById("txtColor");

  for (var i = 0; i < tag.length; i++) {
    tag[i].style.color = color.value;
  }

  }
