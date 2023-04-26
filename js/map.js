// get the data from the database

fetch('http://localhost:3000/data')
.then(response => response.json())
.then(data => {
  //console.log(data)
  //console.table(data)
  //console.table(data[0])
  //console.log(" the one :  " +data)
  // console.log(data[0])
  //console.table(data[0].Pharmacies[0].nom)
  // console.table(data[0].Pharmacies[0])

  let link = document.getElementById("link");
  const keys = Object.keys(data[0]);

  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];
    let div = document.createElement("div");
    div.classList.add("catego");
    let h2 = document.createElement("h2");
    h2.classList.add(key)
    h2.textContent = key + " ➜";
    div.appendChild(h2);
    link.appendChild(div);
    console.log("this key is call " + key + " and here length is " + data[0][key].length);
      for (let j = 0; j < data[0][key].length; j++) {
        console.log(data[0][key][j].nom);
        let p = document.createElement("p");
        p.textContent = data[0][key][j].nom;
        h2.insertAdjacentElement("afterend", p);
      }
    }
  let catego = document.querySelectorAll(".catego");

  catego.forEach(element => {
    element.addEventListener("click", function() {
      let h2 = element.querySelector("h2");
      let Theclicked = h2.classList[0];
      console.log(Theclicked);
      let TheclickedTrue = document.querySelector("." + Theclicked);
      console.log(TheclickedTrue);
    })
  });
})




// menu deroulent 
// var pharmabtn = document.querySelector(".pharmabtn");
// var pharma = document.querySelectorAll(".pharma");

// var boulbtn = document.querySelector(".boulbtn");
// var boul = document.querySelectorAll(".boul");

// var boubtn = document.querySelector(".boubtn");
// var bou = document.querySelectorAll(".bou");

// var restbtn = document.querySelector(".restbtn");
// var rest = document.querySelectorAll(".rest");

// pharmabtn.addEventListener("click", function() {
//   if (pharma[0].style.display === "none") {
//     pharma.forEach(element => {
//       element.style.display = "block";
//     });
//     boul.forEach(element => {
//       element.style.display = "none";
//     });
//     bou.forEach(element => {
//       element.style.display = "none";
//     });
//     rest.forEach(element => {
//       element.style.display = "none";
//     });
//   }
//   else {
//     pharma.forEach(element => {
//       element.style.display = "none";
//     });
//   }
// });

// boulbtn.addEventListener("click", function() {
//   if (boul[0].style.display === "none") {
//     boul.forEach(element => {
//       element.style.display = "block";
//     });
//     pharma.forEach(element => {
//       element.style.display = "none";
//     });
//     bou.forEach(element => {
//       element.style.display = "none";
//     });
//     rest.forEach(element => {
//       element.style.display = "none";
//     });
//   }
//   else {
//     boul.forEach(element => {
//       element.style.display = "none";
//     });
//   }
// });

// boubtn.addEventListener("click", function() {
//   if (bou[0].style.display === "none") {
//     bou.forEach(element => {
//       element.style.display = "block";
//     });
//     pharma.forEach(element => {
//       element.style.display = "none";
//     });
//     boul.forEach(element => {
//       element.style.display = "none";
//     });
//     rest.forEach(element => {
//       element.style.display = "none";
//     });
//   }
//   else {
//     bou.forEach(element => {
//       element.style.display = "none";
//     });
//   }
// });

// restbtn.addEventListener("click", function() {
//   if (rest[0].style.display === "none") {
//     rest.forEach(element => {
//       element.style.display = "block";
//     });
//     pharma.forEach(element => {
//       element.style.display = "none";
//     });
//     boul.forEach(element => {
//       element.style.display = "none";
//     });
//     bou.forEach(element => {
//       element.style.display = "none";
//     });
//   }
//   else {
//     rest.forEach(element => {
//       element.style.display = "none";
//     });
//   }
// });





// tableaux associatifs des données

    // Lien google map
  

// changer les donners de la carte et des infos
    // const mapbtn = document.querySelectorAll(".mapbtn");
    // mapbtn.forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     document.getElementById("map").src = maplink[btn.id];
    //     document.getElementById("tel").innerHTML = maptel[btn.id];
    //     if (mapsite[btn.id] == "none") {
    //       document.getElementById("cartouche_site").style.display = "none";
    //     } else {
    //       document.getElementById("cartouche_site").style.display = "flex";
    //       document.getElementById("site").href = mapsite[btn.id];
    //       document.getElementById("site").innerHTML = "Lien site";
    //     }
    //     document.getElementById("loca").innerHTML = maploca[btn.id];
    //   })
    // });

    

    /*
    Username : admin
    Password : cViz2xBYEcCRvsfN
    */