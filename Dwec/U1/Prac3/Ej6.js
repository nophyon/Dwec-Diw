var tabla = prompt ("Qué tabla de multiplicar quieres que te muestre?");
var i;
for (var i = 1; i < 11; i++) {
  var result = tabla * i;
  document.write ("<p>"+ tabla + " x " + i + " = " + result + "</p>");
}
