"use strict"
onload = function () {

  var body = document.body.children;
  for (var i = 0; i < body.length; i++) {
    body[i].innerHTML = "Element"+[i];
    body[i].style.color = "blue";

  }
console.log(document.body.childrenNodes);
console.log(body);
}
