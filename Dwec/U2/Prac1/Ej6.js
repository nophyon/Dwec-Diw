"use strict"
function Persona(nombre,apellido,apellido2){
  this.nombre = nombre || "Anónimo";
  this.apellido = apellido;
  this.apellido2 = apellido2;
  this.edad = Math.floor((Math.random()*100));
  this.saludar = function(){
      console.log("Hola me llamo "+ this.nombre + " " + this.apellido + " " + this.apellido2);
    }
  this.CumplirAnyo = function (){
      this.edad= this.edad + 1;
    }
}

function Estudiante(nombre, apellido, apellido2, estudios, notaMedia) {
  Persona.call(this,nombre,apellido,apellido2);
  this.estudios = estudios;
  this.notaMedia = notaMedia.toFixed(0) ||0;
  this.recuperar = function (){
    this.notaMedia = 5;
  }
}

var lista = [3];
lista [0] = new Estudiante("Juan","Taberner","Gomis","DAW2",9.5);
lista [1] = new Estudiante("Carlos", "La", "Ramona", "DAW2",7.5);
lista [2] = new Estudiante("","El","Fantasma","ASIR2",6.4);
var y = lista[0];
var z = lista[1];
var zz= lista[2];


  console.log("El estudiante de "+y.estudios+" "+y.nombre+" "+y.apellido+
" "+y.apellido2+" "+"tiene una nota media de "+y.notaMedia);



  console.log("El estudiante de "+z.estudios+" "+z.nombre+" "+z.apellido+
" "+z.apellido2+" "+"tiene una nota media de "+z.notaMedia);



  console.log("El estudiante de "+zz.estudios+" "+zz.nombre+" "+zz.apellido+
" "+zz.apellido2+" "+"tiene una nota media de "+zz.notaMedia);

// for (var x in y) {
// console.log(x+" "+y[x]);
// }
