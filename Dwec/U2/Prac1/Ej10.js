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

  this.crearPassword = function(){
    return Juan.nombre.charAt(0).toUpperCase().concat((Juan.apellido.replace("e",3).replace("a",4)).toLowerCase(),Juan.nombre.length);
  }

}

var Juan = new Estudiante("Juan","Taberner","Gomis","DAW2",9.5);
Juan.password = Juan.crearPassword();
console.log(Juan.password);

// console.log(Juan.nombre.charAt(0).toUpperCase().concat("hola"));
// console.log(Juan.nombre.charAt(0).toUpperCase().concat((Juan.apellido.replace("e",3).replace("a",4)).toLowerCase(),Juan.apellido.length));
