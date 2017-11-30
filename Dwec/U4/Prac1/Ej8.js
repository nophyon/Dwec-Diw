onload = function(){

onkeypress = zoom;
var img = document.getElementsByTagName('img')[0];
function zoom (e){
  if(e.key=="+"&&img.width<=1000){
    img.width = img.width + 25;
  }

  if (e.key=="-"&&img.width>150) {
    img.width = img.width - 25;
  }
}


}
