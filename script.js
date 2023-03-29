const contBtnRightData = document.querySelector(".cont-btn-right-data");
const contBtnLeftData = document.querySelector(".cont-btn-left-data");

const containerCardsData = document.querySelectorAll(".container-card-data");

const contBtnRight = document.querySelector(".cont-btn-right");
const contBtnLeft = document.querySelector(".cont-btn-left");

const containerCards = document.querySelectorAll(".container-card");

let indexData = 0;
let index = 0;


contBtnLeftData.addEventListener("click", () => {
  console.log("left" + "Data");
  indexData--;
  console.log(indexData + "Data");
  if (indexData == 0) {
    contBtnLeftData.style.visibility = "hidden";
  }

  containerCardsData.forEach((containerCard) => {
    console.log("data" + containerCard);
    containerCard.style.transform =
      "translateX(" + -1070 * indexData + "px)";
  });
});

contBtnRightData.addEventListener("click", () => {
  console.log("right Data");
  indexData++;
  console.log(indexData +"Data");
  if (indexData != 0) {
    contBtnLeftData.style.visibility = "visible";
  }
  containerCardsData.forEach((containerCard) => {
    console.log(containerCard);
    containerCard.style.transform = "translateX(" + -1070 * indexData + "px)";
  });
});


contBtnLeft.addEventListener("click", () => {
  console.log("left");
  index--;
  console.log(index);
  if (index == 0) {
    contBtnLeft.style.visibility = "hidden";
  }

  containerCards.forEach((containerCard) => {
    console.log(containerCard);
    containerCard.style.transform =
      "translateX(" + -1070 * index + "px)";
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
    containerCard.style.transform = "translateX(" + -1070 * index+ "px)";
  });
});


