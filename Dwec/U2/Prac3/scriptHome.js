"use strict"

var p = new Surtido (productsArray);
// var miCompra = [productsArray[0], productsArray[3]];
p.drawRange();

function recarga(){
window.location.reload()
}

function verPorPrecioMas (p){
  p.orderPriceBot ();
  p.drawRange ();
}

function verPorPrecioMenos (p){
  p.orderPriceTop();
  p.drawRange();
}

function verVegano(){
  p.drawRange(p.filterVegan());
}

function navegarCarrito (){
location.assign("carrito.html");

}

function condCompraOnline (){
  var myWindow = window.open("",
"", "width=600,height=300");
  myWindow.document.write("<title>Condiciones</title>"+
   "Estas son las condiciones de la compra"+
 "<br/><br/><button onclick='window.close()'>Cerrar</button>");
}
