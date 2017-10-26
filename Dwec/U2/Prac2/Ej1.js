"use strict"

var fecha = new Date();

var dia = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];



console.log("a) "+fecha.getDate());
console.log("b) "+(fecha.getMonth()+1));
console.log("c) "+fecha.getFullYear());
console.log("d) "+dia[fecha.getDay()]);
console.log("e) "+fecha.toLocaleDateString());
console.log("f) "+fecha.toLocaleTimeString());
console.log("g) "+fecha.toLocaleString());
