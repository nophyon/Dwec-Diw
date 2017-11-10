function addElement (){
  var txt = document.getElementsByName('texto')[0];
  var type = document.getElementById('selector');
  var item = document.createElement("p");
  var div = document.createElement("div");


  if (txt.value&&type.value!=0) {
    item.innerHTML=txt.value;
    item.style.color=type.value;
    item.setAttribute("onclick" , "delElement()");

      if (document.getElementsByClassName(type.value).length>0) {
        document.getElementsByClassName(type.value)[0].appendChild(item);
      }else if(document.getElementsByClassName(type.value).length==0) {
        div.setAttribute("class",type.value);
        div.style.border = "2px solid "+type.value;
        div.style.padding = "15px";

        div.appendChild(item);
        document.body.appendChild(div);

      }


  }else if (type.value==0) {
    alert("Elige una categoría antes de añadir!");
  }else if (!txt.value) {
    alert("Añade un producto primero");
  }
}

function delElement(){
  var del = document.querySelector("p:hover");
    if(del.parentNode.children.length==1){
      del.parentNode.remove();
    }else {
      del.parentNode.removeChild(del);
    }


    
}

function delList(){
  var del = document.querySelectorAll("div");

  for (var i = 0; i < del.length; i++) {
    document.body.removeChild(del[i]);
  }
}
