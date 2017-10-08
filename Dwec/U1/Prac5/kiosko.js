"use strict"
function generaSurtido(){
  var kiosko=["periodicos","revistas","fasciculos","chuches","refrescos","cartas","juguetes","papas"];
  return kiosko;
}

function consultaPrecios(i){
  var precios=[1,2,3.99,0.05,1.50,0.70,4,0.50];
  return precios + "€";
  }

  function mostrarPrecios(precios){
   var precios=[1.50,1.20,0.10,0.05,0.05,1.20,3.99,1.5];
   document.write("<table style='width=100px height=100px'><tr>");
   for (var i = 0; i < precios.length; i++) {
     document.write("<td width='100px' height='100px'><h2>" + precios[i]+"€" + "</h2></td>");
   }
    document.write("</tr></table>");
  }

function mostrarSurtidoPrecio(productos){
  document.write("<table><tr>");
  for (var i = 0; i < productos.length; i++) {
    document.write('<td><img onclick="mostrarPrecios()" width="100px" height="100px" src="' + productos[i] + '.jpg" alt="' + productos[i] + '"></td>');
    }
    document.write("</tr></table>");
    // document.write("<button onclick='mostrarPrecios()'> Ver precios</button>");
  }
