var x = 3/0;
var y = 0/0;
var z = null;
var a = undefined;
var suma1 = x++;
var suma2 = y++;
var suma3 = z++;
var suma4 = a++;

document.write ("<p>" + "La variable 'x' " +  "tiene el valor " + x +
 " y es del tipo "+ typeof(x) + ".</p>");
document.write ("<p>" + "La variable 'y' " +  "tiene el valor " + y +
  " y es del tipo "+ typeof(y) + ".</p>");
document.write ("<p>" + "La variable 'z' " +  "tiene el valor " + z +
   " y es del tipo "+ typeof(z) + ".</p>");
document.write ("<p>" + "La variable 'a' " +  "tiene el valor " + a +
    " y es del tipo "+ typeof(a) + ".</p>");
document.write ("<p>" + "La variable 'suma1' " +  "tiene el valor " + suma1 +
     " y es del tipo "+ typeof(suma1) + ".</p>");
document.write ("<p>" + "La variable 'suma2' " +  "tiene el valor " + suma2 +
      " y es del tipo "+ typeof(suma2) + ".</p>");
document.write ("<p>" + "La variable 'suma3' " +  "tiene el valor " + suma3 +
       " y es del tipo "+ typeof(suma3) + ".</p>");
document.write ("<p>" + "La variable 'suma4' " +  "tiene el valor " + suma4 +
        " y es del tipo "+ typeof(suma4) + ".</p>");
