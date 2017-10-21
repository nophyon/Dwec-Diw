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
    /*Como he usado 2 apellidos todo el rato, voy a crear una variable apellidos
    para poder separarlos según pide este ejercicio*/
    this.apellidos = apellido.concat(apellido2);
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
lista [0] = new Estudiante("Juan","Taberner ","Gomis","DAW2",9.5);
lista [1] = new Estudiante("Carlos", "La ", "Ramona", "DAW2",7.5);
lista [2] = new Estudiante("","El ","Fantasma","ASIR2",6.4);


for (var i = 0; i < lista.length; i++) {
  var arrayApellidos = lista[i].apellidos.split(" ");

  console.log(arrayApellidos);


console.log("Nombre: "+lista[i].nombre+"; "+"Primer Apellido: "+arrayApellidos[0]+
"; "+"Segundo Apellido: "+arrayApellidos[1]+";");
}



// for (v
