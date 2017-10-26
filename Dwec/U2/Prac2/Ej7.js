"use strict"

var a = [4,21,33,12,9,54];
var b = [];
console.log(a);
b = a.forEach(function(num,indice){
      return console.log(num*2);
    });
console.log("a)"+b);

console.log("b) "+a.forEach(function(num,indice, array){
       return console.log("En el índex " + indice +
        " esta el valor " + num + " del array");
         }));
