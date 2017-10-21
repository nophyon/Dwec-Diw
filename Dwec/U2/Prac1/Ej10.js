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

    // return Juan.nombre.charAt(0).toUpperCase().concat((Juan.apellido.replace("a",4).replace("e",3)).toLowerCase(),Juan.nombre.length);

      var conversion = this.apellido.toLowerCase();

      while (conversion.includes("e")){
        conversion = conversion.replace("e",3);
      }
      while (conversion.includes("a")){
      conversion = conversion.replace("a",4);
    }

    return this.nombre.charAt(0).toUpperCase().concat(conversion.trim(),this.nombre.length);
  }
  this.password = this.crearPassword().trim();

}

var lista = [3];
lista [0] = new Estudiante("Juan","Taberner ","Gomis","DAW2",9.5);
lista [1] = new Estudiante("Carlos", "La ", "Ramona", "DAW2",7.5);
lista [2] = new Estudiante("","El ","Fantasma","ASIR2",6.4);
// lista[0].password = lista[0].crearPassword;
// console.log(lista[0].password);
for (var i = 0; i < lista.length; i++) {
  // lista[i].password = lista[i].crearPassword;
  console.log(lista[i].nombre+": "+lista[i].password);
}
// console.log();

// Juan.password = Juan.crearPassword();
// console.log(Juan.apellido.includes("e"));
// console.log(Juan.apellido.replace("e",3));
// var password = Juan.apellido.replace("e",3);
// console.log(password.includes("e"));
// console.log(password.replace("e",3));
// password = password.replace("e",3);
//


// console.log(Juan.nombre.charAt(0).toUpperCase().concat("hola"));
// console.log(Juan.nombre.charAt(0).toUpperCase().concat((Juan.apellido.replace("e",3).replace("a",4)).toLowerCase(),Juan.apellido.length));
