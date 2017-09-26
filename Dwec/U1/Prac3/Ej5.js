var numero = prompt("Introduce un numero del 1 al 10");

if (numero>=1&&numero<=10){
  while (numero>0){
    alert (numero);
    numero--;
  }
} else{
  alert("El numero introducido no vale, recarga la página");
}
