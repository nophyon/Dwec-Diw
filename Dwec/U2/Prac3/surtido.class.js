"use strict"

function Surtido (productsArray){
  this.productsArray = productsArray;
  this.orderPriceTop = function (){
    //Order the products array returning from lesser to greater
    this.productsArray.sort(function(n1,n2){return n2.precio-n1.precio;})
  }
  this.orderPriceBot = function () {
    //Order the products array returning from greater to lesser
      this.productsArray.sort(function(n1,n2){return n1.precio-n2.precio;})
  }
  this.filterVegan = function () {
    //filter the array returning vegan products
  return  productsArray.filter(function(n1){return (n1.vegano==true);});
  }
  this.drawRange = function (prod) {
    //array as parameter, shows images, name, description + price
    //everything inside a div container and id body
    cuerpo.innerHTML = "";
    var str = "";
    if (prod == undefined){
      for (var i = 0; i < this.productsArray.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productsArray[i].foto+"'alt ='";
        str += this.productsArray[i].nombre + "'>";
        str += "<p>El producto" + this.productsArray[i].nombre +"</p>";
        str += "<p>" + this.productsArray[i].descripcion +"</p>";
        str += "<p><b>" + this.productsArray[i].precio +"€</b></p>";
        str += "</div>";
      }
    }else{
        for (var i = 0; i < prod.length; i++) {
          str += "<div>";
          str += "<img src='" + prod[i].foto+"'alt ='";
          str += prod[i].nombre + "'>";
          str += "<p>El producto" + prod[i].nombre +"</p>";
          str += "<p>" + prod[i].descripcion +"</p>";
          str += "<p><b>" + prod[i].precio +"€</b></p>";
          str += "</div>";
      }

    }
    cuerpo.innerHTML = str;
  }
}
