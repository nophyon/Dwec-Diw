"use strict"

var diasSemana = ["Lunes", "Martes", "Miércoles",
                  "Jueves", "Viernes", "Sábado",
                  "Domingo"];
var num;
for (var index in diasSemana) {
  console.log(diasSemana[index]);
}

function numeroSemana() {
  num = prompt ("Elige el número de dia de la semana. El lunes es el 1");
  num = parseInt(num);
  num = num || 4

  if (!isFinite(num)||isNaN(num)) {
    console.log ("Se ha producido un error");
  }else {
    for (var index in diasSemana) {
       if (index==(num-1)) {
         console.log("");
         console.log(diasSemana[index]);
         }
      }
   }



}

numeroSemana();
