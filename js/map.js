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
  console.table(data[0].Pharmacies[0])

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
    //console.log("this key is call " + key + " and here length is " + data[0][key].length);
      for (let j = 0; j < data[0][key].length; j++) {
        //console.log(data[0][key][j].nom);
        let p = document.createElement("p");
        p.textContent = data[0][key][j].nom;
        p.classList.add(key +"p");
        p.style.display = "none";
        h2.insertAdjacentElement("afterend", p);
      }
    }
  let catego = document.querySelectorAll(".catego");

  catego.forEach(element => {
    element.addEventListener("click", function() {
      let h2 = element.querySelector("h2");
      let Theclicked = h2.classList[0];
      //console.log(Theclicked);
      let TheclickedTrue = document.querySelector("." + Theclicked);
      //console.log(TheclickedTrue);
      let toShow = document.querySelectorAll("." + Theclicked + "p");
      //console.log(toShow);
      if (toShow[0].style.display === "none") {
        toShow.forEach(element => {
          element.style.display = "block";
        });
      } else {
        toShow.forEach(element => {
          element.style.display = "none";
        });
      }
    })
  });

  let tel = document.getElementById("tel");
  let loca = document.getElementById("loca");
  let site = document.getElementById("site");
  let map = document.getElementById("map");
  let cartouchesite = document.getElementById("cartouche_site");

  let p = document.querySelectorAll("p");
  p.forEach(element => {
    element.addEventListener("click", function() {
      //console.log(element.textContent);
      //console.log(element.classList)
      // remove last caracter of the class
      let pureClass = element.classList[0].slice(0, -1);
      console.log(pureClass);
      let i = 0;
      while (data[0][pureClass][i].nom != element.textContent) {
        i++;
      }
      // console.log(data[0][pureClass][i].nom);
      // console.log(data[0][pureClass][i].telephone);
      // console.log(data[0][pureClass][i].adresse);
      // console.log(data[0][pureClass][i].site);
      
      tel.textContent = data[0][pureClass][i].telephone;
      loca.textContent = data[0][pureClass][i].adresse;
      map.src = data[0][pureClass][i].maplink;
      if ( data[0][pureClass][i].site == "none") {
        cartouchesite.style.display = "none";
      } else {
        cartouchesite.style.display = "flex";
        site.href = data[0][pureClass][i].site;
        site.textContent = "Lien site";
      }


      
      
    })
  });

});

    

    /*
    Username : admin
    Password : cViz2xBYEcCRvsfN
    */