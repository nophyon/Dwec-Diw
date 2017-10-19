"use strict"



var coche = new Object();
coche.Marca = "renault";
coche.Ruedas = 4;
coche.Plazas = 5;
coche.Color = "azul";

coche.pintar = function (){
  coche.Color = "white";
}

var coche1 = new Object();
coche1.Marca = "renault";
coche1.Ruedas = 4;
coche1.Plazas = 5;
coche1.Color = "azul";

var coche2 = new Object();
coche2.Marca = "renault";
coche2.Ruedas = 4;
coche2.Plazas = 5;
coche2.Color = "azul";

delete coche.Plazas;
console.log(Object.keys(coche));
console.log(Object.keys(coche1));
console.log(Object.keys(coche2));
