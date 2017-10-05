"use strict"

var valor1 = prompt ("Introduce tu nombre:");
var valor2 = prompt ("Introduce tu apellido:");
var total = "";
var varHola = "Hola ";
var varNan = Number (valor1);
var varNan2 = Number (valor2);

function concatena(x,y){
  total = valor1.concat(" ",valor2);

}

function Saludador (x){
  console.log(varHola.concat(total), " !");
}

if (isNaN(varNan)&&isNaN(varNan2)) {

Saludador (varHola,concatena(valor1,valor2));


}else {
  console.log("No has introducido bien tu nombre");
}
