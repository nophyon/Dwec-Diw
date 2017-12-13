onload = function ()  {

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

   var email = localStorage.getItem("email");
   console.log("email = "+email);
   var dni = sessionStorage.getItem("dni");
   console.log("dni = "+dni);
   var nombre = getCookie ("Nombre");
   var apellidos = getCookie ("Apellidos");
   console.log("Nombre " +nombre);
   console.log("Apellidos " +apellidos);

  var Mip =  document.getElementsByTagName("p")[0];
  Mip.innerHTML = "Hola "+nombre+" "+apellidos+"<br>"+
  "Tiene usted el dni: "+dni+ "<br>"+
  "y su Email es: "+email+ "<br>"+
  "Le damos la bienvenida a la web!";
}
