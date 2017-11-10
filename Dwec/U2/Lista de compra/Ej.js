// var txt = document.getElementsByName('texto')[0];
// var txt2 = document.getElementsByTagName('input')[0];
// txt.value;
// if (txt.value == "") {
//
// }
// var type = document.getElementById('selector'); //esto tambien funciona usando solo selector
// type.value;
// if (type.value == "") {
//
// }
//
// var mip = document.createElement("p");
// mip.innerHTML = txt.value;
//document.body.appendChild(variable);


function addElement (){
  var txt = document.getElementsByName('texto')[0];
  var type = document.getElementById('selector');
  var item = document.createElement("p");
  if (txt.value&&type.value!=0) {
    item.innerHTML=txt.value;
    item.style.color=type.value;
    item.setAttribute("onclick" , "delElement()");
    document.body.appendChild(item);
  }else if (type.value==0) {
    alert("Elige una categoría antes de añadir!");
  }else if (!txt.value) {
    alert("Añade un producto primero");
  }
}

function delElement(){
  var del = document.querySelector("p:hover");
  document.body.removeChild(del);
}

function delList(){
  var del = document.querySelectorAll("p");

  for (var i = 0; i < del.length; i++) {
    document.body.removeChild(del[i]);
  }
}
