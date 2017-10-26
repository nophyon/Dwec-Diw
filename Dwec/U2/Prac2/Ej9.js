"use strict"

function start(){
      var var1 = new Date();
      return console.log(var1.toLocaleTimeString());
    }
console.log(new Date().toLocaleTimeString());
var interval = setInterval(start,5000);
