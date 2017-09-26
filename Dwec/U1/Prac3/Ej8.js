var precio = prompt ("Dame un precio que rebajar:");
precio = parseInt(precio);
// document.write ("<p>" + "La variable 'x' " +  "tiene el valor " + precio +
//  " y es del tipo "+ typeof(precio) + ".</p>");
if (isNaN(precio)||precio<1){
  alert ("El numero introducido no es correcto."
          + "\nRecargue la página y recuerde:"
          + "\nEl valor del precio tiene que ser un número positivo mayor que 0");

}else{

  var rebaja = prompt ("Dame una rebaja que aplicar:");
  function rebajas(precio, rebaja){
     return precio*(rebaja/100);
  }
  var resultado = rebajas(precio,rebaja);
  alert ("Precio Final: " + (precio-resultado));
}
