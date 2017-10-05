"use strict"

function calculadora() {
var calc = prompt ("Introduce una operación que quieras calcular:");

var transformado = eval(calc);

if (!isFinite(transformado)||isNaN(transformado)) {
  console.log ("Se ha producido un error");
}else {
  console.log (transformado);
}

}
calculadora();
