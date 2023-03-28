const contBtnRight = document.querySelector(".cont-btn-right");
const contBtnLeft = document.querySelector(".cont-btn-left");

const containerCards = document.querySelectorAll(".container-card");
console.log(containerCards);
let index = 0;


contBtnLeft.addEventListener("click", () => { 

  console.log("left");
  index--;
  console.log(index);
   if (index == 0) {
     contBtnLeft.style.visibility = "hidden";
  }
 
  
   containerCards.forEach((containerCard) => {
     console.log(containerCard);
     containerCard.style.transform = "translateX(0)";
   });

  
});

contBtnRight.addEventListener("click", () => { 

  console.log("right");
  index++;
  console.log(index);
  if (index != 0) {
    contBtnLeft.style.visibility = "visible";
  }
  containerCards.forEach((containerCard) => {
    console.log(containerCard);
    containerCard.style.transform = "translateX(-1050px)";
  });

 
});

