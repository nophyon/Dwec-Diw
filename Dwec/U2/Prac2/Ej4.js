"use strict"
var array = [3,9,10,25,4];
// console.log(typeof(array[3]) == "number");
console.log("a) "+array.every(function(num){return typeof(num) == "number";}));
console.log("b) "+array.some(function(b){return b <20;}));
var a =[4,21,33,12,9,54];
function sum (total, num){
  return total + num;
}
console.log("c) "+a.reduce(sum));
