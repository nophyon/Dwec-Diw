onload = function() {
  onkeydown = mostrarSiEspecial;
  onkeypress = mostrarCaracter;
  onkeyup = mostrarcodigo;
}

var especial;

function mostrarSiEspecial(e){
  //Todas las teclas generan un keydown. Así distingo si es especial
  especial = e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;
  if (especial){
    var mensaje = '';
    mensaje += "Has pulsado una tecla especial, mire la consola"
    mensaje += "<br><br>";
    cuerpo.innerHTML += mensaje;
      var mensaje = '';
      mensaje = "Has pulsado la tecla especial  "+ e.key;
      console.log(mensaje);
  }
}

function mostrarcodigo(e){
var mensaje = ' ';
//ESTO ES PARA MOSTRAR EL CAPSLOCK EN LA CONSOLA, no se si es una tecla especial
// if (e.charCode==0) {
//   mensaje += " Has pulsado la tecla: "+e.key;
//   console.log(mensaje);
// }
mensaje = " Y la tecla era: "+e.keyCode;
mensaje += "<br><br>";


  cuerpo.innerHTML += mensaje;
}

function mostrarCaracter(e) {
  //Sólo si la tecla genera un keypress es un carácter normal
  var mensaje = '';

  mensaje += " Has pulsado el caracter: "+String.fromCharCode(e.charCode)


  cuerpo.innerHTML += mensaje;

  if (especial){
    var mensaje = '';
    mensaje = "Has pulsado la tecla especial  "+ e.key;
    console.log(mensaje);
  }
}
