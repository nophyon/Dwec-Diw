
onload =  function(){
selector.addEventListener("change",cambiarImg);
  function cambiarImg() {
    var nuevaFoto = selector.value;
    img.src = "imagen" + selector.value + ".png"
  }
}
