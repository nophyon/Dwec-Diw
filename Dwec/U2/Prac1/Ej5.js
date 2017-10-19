"use strict"
function Persona(nombre,apellido,apellido2){
  this.nombre = nombre || "Anónimo";
  this.apellido = apellido;
  this.apellido2 = apellido2;  
  this.saludar = function(){
      console.log("Hola me llamo "+ this.Nombre + " " + this.Apellido + " " + this.Apellido2);
    }
  
}
Persona.prototype.edad = Math.floor((Math.random()*100));
Persona.prototype.CumplirAnyo = function (){
      this.edad= this.edad + 1;
    }
var juan = new Persona("Juan","Taberner","Gomis");
  juan.telefono = 456456456;
var pepe = new Persona("","Casa","Casa");
  console.log(Object.keys(juan));





for (var x in juan) {
console.log(x+" "+juan[x]);

}


for (x in pepe) {

    console.log(x +" "+ pepe[x])

}

// console.log(juan.Nombre);
