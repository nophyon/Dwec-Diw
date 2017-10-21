"use strict"
function Persona(nombre,apellido,apellido2){
  this.nombre = nombre || "Anónimo";
  this.apellido = apellido;
<<<<<<< HEAD
  this.apellido2 = apellido2;

  this.saludar = function(){
      console.log("Hola me llamo "+ this.Nombre + " " + this.Apellido + " " + this.Apellido2);
    }

}
  Persona.prototype.CumplirAnyo = function (){
    this.edad= this.edad + 1;
  }
  Persona.prototype.edad = Math.floor((Math.random()*100));
=======
  this.apellido2 = apellido2;  
  this.saludar = function(){
      console.log("Hola me llamo "+ this.Nombre + " " + this.Apellido + " " + this.Apellido2);
    }
  
}
Persona.prototype.edad = Math.floor((Math.random()*100));
Persona.prototype.CumplirAnyo = function (){
      this.edad= this.edad + 1;
    }
>>>>>>> 8ab19e9763a20d158491f2c2c394c255967df852
var juan = new Persona("Juan","Taberner","Gomis");
  juan.telefono = 456456456;
var pepe = new Persona("","Casa","Casa");
  console.log(Object.keys(juan));


/*El math.random() lo hace una sola vez y pone a todos los objetos lo mismo?*/


for (var x in juan) {
console.log(x+" "+juan[x]);

}


for (x in pepe) {

    console.log(x +" "+ pepe[x])

}
// console.log(juan.Nombre);
