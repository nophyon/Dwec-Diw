"use strict"
var x = prompt ("Dime algo:");
var y = prompt ("Dime otro algo:");
function long (x,y){
  if (x.length>y.length) {
    console.log(x.length);
  }else{
    console.log (y.length);
  };
}
long (x,y);
