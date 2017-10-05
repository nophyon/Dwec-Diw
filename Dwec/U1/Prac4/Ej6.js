"use strict"

var array = [10];
var array2 = [];
var cont = 0;

array [0] = true;
array [1] = 1;
array [2] = "hola";
array [3] = 4;
array [4] = 5;
array [5] = false;
array [6] = "adios";
array [7] = 7;
array [8] = 8;
array [9] = true;

for (var i = 0; i < array.length; i++) {
  console.log ("Indice: "+i);
  console.log ("Contenido: "+array[i]);
  console.log ("Tipo: "+typeof (array[i]) );
  console.log ("");

  array[i]= Number (array[i]);

  if(isNaN(array[i])==true){
    array2[cont] = array[i];
    cont++;
  }

}
console.log ("Tamaño del array: "+array.length);
console.log ("");
for (var i = 0; i < array2.length; i++) {
  console.log ("Indice: "+i);
  console.log ("Contenido: "+array2[i]);
  console.log ("Tipo: "+typeof (array2[i]) );
  console.log ("");
}
