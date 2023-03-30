const contBtnRightData = document.querySelector(".cont-btn-right-data");
const contBtnLeftData = document.querySelector(".cont-btn-left-data");

const containerCardsData = document.querySelectorAll(".container-card-data");

const contBtnRight = document.querySelector(".cont-btn-right");
const contBtnLeft = document.querySelector(".cont-btn-left");

const containerCards = document.querySelectorAll(".container-card");

let indexData = 0;
let IndexDataMax = containerCardsData.length 

let index = 0;
let IndexMax = containerCards.length; 


contBtnLeftData.addEventListener("click", () => {
  console.log("left" + "Data" + containerCardsData.length + containerCardsData);
  indexData--;

  if (indexData == 0) {
    contBtnLeftData.style.visibility = "hidden";
  }

  containerCardsData.forEach((containerCard) => {
   
    containerCard.style.transform =
      "translateX(" + -1070 * indexData + "px)";
  });
});

contBtnRightData.addEventListener("click", () => {
  console.log("right Data" + containerCardsData.length + containerCardsData);
  indexData++;
  console.log(indexData +"Data");
  if (indexData != 0) {
    contBtnLeftData.style.visibility = "visible";
  }
  if (((indexData+1)*4) >= IndexDataMax ) {
    console.log("indexData+1)*4) == IndexDataMax");
    contBtnRightData.style.visibility = "hidden";
  }
  containerCardsData.forEach((containerCard) => {
    
    containerCard.style.transform = "translateX(" + -1070 * indexData + "px)";
  });
});


contBtnLeft.addEventListener("click", () => {
  console.log("left" + containerCardsData.length + containerCardsData);
  index--;
  console.log(index);
  if (index == 0) {
    contBtnLeft.style.visibility = "hidden";
  }

  containerCards.forEach((containerCard) => {
    
    containerCard.style.transform =
      "translateX(" + -1070 * index + "px)";
  });
});

contBtnRight.addEventListener("click", () => {
  console.log("right" + containerCardsData.length + containerCardsData);
  index++;
  console.log(index);
  if (index != 0) {
    contBtnLeft.style.visibility = "visible";
  }
  if ((index + 1) * 2 >= IndexMax) {
    console.log("index+1)*2) == IndexMax");
    contBtnRight.style.visibility = "hidden";
  }
  containerCards.forEach((containerCard) => {
   
    containerCard.style.transform = "translateX(" + -1070 * index+ "px)";
  });
});


