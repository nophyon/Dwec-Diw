"use strict"
onload = function(){

//El foco del demonio 1.a
var inputs = document.getElementsByTagName('input');

function conFoco (e){
  e.target.style.outline ="none";
  e.target.style.border = "purple solid 2px";

}

function sinFoco (e){
  e.target.style.outline ="none";
  e.target.style.borderColor = "initial";
  e.target.style.borderStyle = "inset";


}


for (var i = 0; i < inputs.length; i++) {

  if (inputs[i].autofocus) {
    inputs[i].style.outline ="none";
    inputs[i].style.border = "purple solid 2px";
  }

  inputs[i].addEventListener("focus", conFoco);
  inputs[i].addEventListener("blur",  sinFoco);


}

//Antes de enviar el formulario el evento submit y todas sus disyuntivas
var form = document.forms[0];

form.onsubmit = function(e){
  var errList = document.getElementsByClassName('errores')[0];
  var error ="";
  var ret = true;
  // e.preventDefault ();
  //disyuntiva de nombre
  var name = document.getElementsByName('nombre')[0].value;
  // console.log(name);


                  //comprobacion de retorno
  // console.log(name);

    if (name == null || name.length == 0 || !(/^\S+$/.test(name))) {
      error += "Incorrect Name <br/>";
      // console.log(error);
      ret = false;
    }else{
      document.cookie = "Nombre ="+name +
       ";max-age="+3600*24*365 + ";path =/;";
    }




                  //disyuntiva de apellidos
  var apellidos = document.getElementsByName('apellidos')[0].value;
  // console.log(apellidos);
      if (apellidos == null || apellidos.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
        ret = false;
        error += "Incorrect Surname <br/>";
      }else{
        document.cookie = "Apellidos ="+apellidos+
         ";max-age="+3600*24*365 + ";path =/;";
      }





                //disyuntiva e-mail

  var email = document.getElementsByName("email")[0].value;

  // console.log(email);
      if ( !/^\w+@\w+\.\w+$/.test(email) ){
            error += "Wrong Email <br/>";
            ret = false;
      }else{
          localStorage.setItem("email", email);
      }



  var emailRepe = document.getElementById("emailRepe").value;
        if(email != emailRepe){
            error += "Confirm failed. Introduce the same email again<br/>";
            ret = false;
        }


              //disyuntiva DNI
  var dni = document.getElementById("dni").value;

  var chars = ['T','R','W','A','G','M','Y','F','P','D','X',
        'B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

        if (isNaN(dni)) {

            if( !(/^\d{8}[A-Z]$/.test(dni)) ){
                error += "Incorrect DNI <br/>";
               ret = false;
            }

            if(dni.charAt(8) != chars[(dni.substring(0, 8))%23]){

               // ret = false;
            }
        }else{
          sessionStorage.dni = dni;
        }

        // console.log("dni ret "+ret);

              //disyuntiva edad
  var fecha = (document.getElementById('fecha').value).split('-');
  var anyo=fecha[0];
  var mes=fecha[1];
  var dia=fecha[2];
  // console.log(dia + " " + mes + " " + " " + anyo);
  var nf= new Date(anyo,(mes - 1),dia);
  // console.log(nf);

  var hoy = new Date();
            //resto los años de las dos fechas
  var edad = hoy.getFullYear()- anyo - 1; //-1 porque no se si ha cumplido años ya este año
            //si resto los meses y me da mayor que 0, ha cumplido años
  if (hoy.getMonth() + 1 - mes > 0){
      edad++;
  }
              //si resto los dias y me da menor que 0 entonces no ha cumplido años.
              //si da mayor o igual si ha cumplido
  if (hoy.getUTCDate() - dia >= 0){
      edad++;
  }
  // console.log("Edad " + edad);
  if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anyo < 0 || anyo >= hoy.getFullYear()){
      error += "Incorrect date <br/>";
      ret = false;
      // console.log("date "+ret);
  }else if (edad < 18){
      error += "You must ve over 18 to register <br/>";
      ret = false;
      // console.log("under18 "+ret);
  }
  // console.log("edad "+ret);
                //disyuntiva sección

  var secc = document.getElementsByName("seccion")[0].selectedIndex;
  if (secc == null || secc == 0){
      error += "Choose a favourite section <br/>";
      ret = false;
  }
  // console.log("seccion "+ret);
                //disyuntiva pago

  var payMethodE = document.getElementById("efectivo").checked;
  var payMethodT = document.getElementById("tarjeta").checked;

  if (!payMethodE && !payMethodT){
    ret = false;
    error += "Choose the payment method <br/>";
  }

                //diyuntiva condiciones


    // console.log(ret);
    if (ret){

      error = "Tu formulario se ha enviado correctamente";
      errList.style.color="blue";
      document.getElementById("enviar").value = "Enviando...";
      document.getElementById("enviar").disabled = true;
    }else{
      errList.style.color="red";


    }

    errList.innerHTML = error;
    return ret;





}

}
