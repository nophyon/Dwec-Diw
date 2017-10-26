"use strict"

var proximasVacaciones = prompt ("Cuando son tus proximas vacaciones? Formato:  aaaa-mm-dd aaaa/mm/dd");

var fechaProxima = new Date(proximasVacaciones);

var fecha = new Date();
console.log((fechaProxima-fecha)/(1000*3600*24));
