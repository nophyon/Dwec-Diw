var str = document.getElementsByTagName('p')[0];
var caps = true;
onkeydown = function (e){


  if(e.shiftKey&&caps){
    str.innerHTML = str.innerHTML.toUpperCase();
    caps = false;
  }

  else if (e.shiftKey&&!caps) {
    str.innerHTML = str.innerHTML.toLowerCase();
    caps = true;
  }

}
