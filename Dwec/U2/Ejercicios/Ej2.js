
  var h1 = document.querySelector("h1");
  h1.innerHTML = "Changed content";
  var destacado = document.getElementsByClassName("destacado")[0];
  destacado.style.fontWeight = "bold";
  var resultado = document.getElementById("resultado");
  resultado.style.display = "none";

  var sugerencia = document.getElementsByName("sugerencia")[0];
  sugerencia.setAttribute("required","required");

  c

  function mostrar(){
    resultado.style.display = "block";
  }
