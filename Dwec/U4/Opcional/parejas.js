onload = function (){

  var princess = []
  while(princess.length < 12){
      var random = Math.floor(Math.random()*12);
      if(princess.indexOf(random) > -1) continue;
      princess[princess.length] = random;
  }
  console.log(princess);

var fichas = document.getElementsByTagName('img');



for (var i = 0; i < fichas.length; i++) {
  fichas[i].src = "img/cruz.png";

  fichas[i].addEventListener("click",function(e){
    e.target.src ="img/"+princess[i]+".png";
    console.log(e.target.src ="img/"+princess[i]+".png");
  });

}
// console.log(princess[3]);
// fichas[3].src = "img/"+princess[3]+".png";
// console.log(fichas[3]);



}
