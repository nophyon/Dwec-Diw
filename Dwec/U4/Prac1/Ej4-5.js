
onload = function(){

var img1 = document.getElementsByTagName('img')[0];
  function cambio(){
  img1.src = "http://www.petwave.com/~/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx";
}

  function vuelta(){
  img1.src ="https://i.pinimg.com/originals/53/4c/44/534c448aa8f0c462c65badb259186570.jpg"
}

img1.addEventListener("mouseover",cambio);
img1.addEventListener("mouseout",vuelta);

var enlace = document.getElementsByTagName('a')[0];

enlace.onclick = function (e){
  e.preventDefault();
    img1.removeEventListener("mouseover",cambio);
    img1.removeEventListener("mouseout",vuelta);
}

}
