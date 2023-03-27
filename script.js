const contBtnRight = document.querySelector(".cont-btn-right");
const contBtnLeft = document.querySelector(".cont-btn-left");
let index = 0;

contBtnLeft.addEventListener("click", () => { 

  console.log("left");
  index--;
  console.log(index);
  
  
});

contBtnRight.addEventListener("click", () => { 

  console.log("right");
  index++;
  console.log(index);
 
 
});
if (index != 0) {
  contBtnLeft.style.display = "block";
}else{
  contBtnLeft.style.display = "none";
}

