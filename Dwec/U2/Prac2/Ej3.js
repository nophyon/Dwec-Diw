"use strict"

var array = [3,9,4,7];
console.log("a) "+array.toString());
array.push(5,6);
array.unshift(12,15);
console.log("b) "+array.toString());
array.splice(3,3);
console.log("d) "+array.toString());
array.splice(2,0,10,25);
console.log("e) "+array.toString());
console.log("f) "+array.join("==>"));
var array2 = array;
array2[0] = array2[4];
array2[1] = array2[3];

// array2.sort(function(a, b){return a - b});
// console.log("g) "+array2);
console.log("g) "+array);
console.log("g) "+array2);
console.log("h) Al copiar un array en otra variable, hemos compiado hasta"+
              " la dirección de memoria, por lo que al modificar un array se "+
            "modifica el otro porque está apuntando al mismo sitio"  );
console.log("i) "+array.indexOf(25));
console.log("i) "+array.indexOf(15));
