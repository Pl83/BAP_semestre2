// loading screen
window.addEventListener("load", function(){
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.style.display = "none";
  content.style.display = "block";
});

// burger
let burger = document.querySelector("#bur");
let nav = document.querySelector("#nav");
let spanOne = document.querySelector("#span_one");
let spanTwo = document.querySelector("#span_two");
let spanThree = document.querySelector("#span_three");
var cont = 0;

burger.addEventListener("click", function() {
  cont = cont + 1;
  console.log(cont);
  if (cont%2 != 0){
    for (i = 200 ; i >= 0 ; i--){
      nav.style.top = i + "px";
    }
    spanTwo.style.display = "none";
    spanOne.style.transform = "rotate(45deg)";
    spanOne.style.top = "9px";
    spanThree.style.transform = "rotate(-45deg)";

  } else {
    for (i = 0 ; i <= 200 ; i++){
      nav.style.top = -i + "px";
    }
    spanTwo.style.display = "block";
    spanOne.style.transform = "rotate(0deg)";
    spanOne.style.top = "0";
    spanThree.style.transform = "rotate(0deg)";
  }

});