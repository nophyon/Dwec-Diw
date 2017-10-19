"use strict"

function Persona(Nombre,Apellido,Apellido2){
  this.Nombre = Nombre || "Anónimo";
  this.Apellido = Apellido;
  this.Apellido2 = Apellido2;
  this.saludar = function(){
      console.log("Hola me llamo "+ this.Nombre + " " + this.Apellido + " " + this.Apellido2);
    }
  }



var juan = new Persona("Juan","Taberner","Gomis");
var pepe = new Persona("","Casa","Casa");

console.log(juan.saludar());
console.log(pepe.saludar());
console.log(juan instanceof(Persona));
