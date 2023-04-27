
function jourActuel() {
  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const maintenant = new Date();
  const jourIndex = maintenant.getDay();
  const jour = jours[jourIndex];
  return jour;
}

function verifieHeureOuverture(stringHeures) {
  if (stringHeures != "none"){
    const heures = stringHeures.split(" - ");
    const heureDebut = heures[0];
    const heureFin = heures[1];
    
    const maintenant = new Date();
    const heureActuelle = maintenant.getHours();
    const minuteActuelle = maintenant.getMinutes();
    
    const heureDebutSplit = heureDebut.split(":");
    const heureDebutNum = parseInt(heureDebutSplit[0]);
    const minuteDebutNum = parseInt(heureDebutSplit[1]);
    
    const heureFinSplit = heureFin.split(":");
    const heureFinNum = parseInt(heureFinSplit[0]);
    const minuteFinNum = parseInt(heureFinSplit[1]);
    
    if (heureActuelle > heureDebutNum && heureActuelle < heureFinNum) {
      //console.log("Ouvert1");
      return "Ouvert"
    } else if (heureActuelle === heureDebutNum && minuteActuelle >= minuteDebutNum) {
      //console.log("Ouvert2");
      return "Ouvert"
    } else if (heureActuelle === heureFinNum && minuteActuelle < minuteFinNum) {
      //console.log("Ouvert3");
      return "Ouvert"
    } else {
      //console.log("Fermé");
      return "Fermé"
    }
  } else {
    //console.log("Fermé");
    return "Fermé"
  }
}


var todayHoraire = null;
// get the data from the database

fetch('http://localhost:3000/data')
.then(response => response.json())
.then(data => {
  //console.log(data)
  //console.table(data)
  //console.table(data[0])
  //console.log(" the one :  " +data)
  // console.log(data[0])
  //console.table(data[0].Pharmacies[0].horaire)
  //console.log(data[0].Pharmacies[0].horaire[0].lundi)
  //console.table(data[0].Pharmacies[0])

  
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
        // let horaire = data[0][key][j].horaire;
        // console.log(horaire);
        // let lundi = horaire[0];
        // console.log(lundi);
        let p = document.createElement("p");
        p.textContent = data[0][key][j].nom;
        p.classList.add(key +"p");
        p.style.display = "none";
        
        let state = document.createElement("p");
        state.classList.add(key + "p");
        state.style.display = "none";
        let day = jourActuel();
        //console.log(day);
        day = day.toLowerCase();
        if (day == 'lundi'){
          //console.log("c'est lundi");
          todayHoraire = data[0][key][j].horaire[0].lundi;

        } else if  (day == 'mardi') {
          //console.log("c'est mardi");
          todayHoraire = data[0][key][j].horaire[1].mardi;

        } else if  (day == 'mercredi') {
          //console.log("c'est mercredi");
          todayHoraire = data[0][key][j].horaire[2].mercredi;

        } else if  (day == 'jeudi') {
          //console.log("c'est jeudi");
          todayHoraire = data[0][key][j].horaire[3].jeudi;
          //console.log(todayHoraire);
          //console.log(verifieHeureOuverture(todayHoraire));
          state.textContent = verifieHeureOuverture(todayHoraire);

        } else if  (day == 'vendredi') {
          //console.log("c'est vendredi");
          todayHoraire = data[0][key][j].horaire[4].vendredi;

        } else if  (day == 'samedi') {
          //console.log("c'est samedi");
          todayHoraire = data[0][key][j].horaire[5].samedi;

        } else if  (day == 'dimanche') {
          //console.log("c'est dimanche");
          todayHoraire = data[0][key][j].horaire[6].dimanche;

        } else {
          console.log("c'est pas un jour");
        }
        let div2 = document.createElement("div");
        div2.appendChild(p);
        div2.style.display = "flex";
        div2.style.flexDirection = "row";
        div2.style.gap = "10px";
        p.insertAdjacentElement("afterend", state);
        h2.insertAdjacentElement("afterend", div2);

        let allP = document.querySelectorAll("p");
        allP.forEach(element => {
          if (element.textContent === "Ouvert") {
            element.style.color = "green";
          } else if (element.textContent === "Fermé") {
            element.style.color = "red";
          }
        });
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
  let horaire = document.getElementById("horaire");
  let cartouchesite = document.getElementById("cartouche_site");

  let p = document.querySelectorAll("p");
  p.forEach(element => {
    element.addEventListener("click", function() {
      //console.log(element.textContent);
      //console.log(element.classList)
      // remove last caracter of the class
      let pureClass = element.classList[0].slice(0, -1);
      //console.log(pureClass);
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
      let day = jourActuel();
      //console.log(day);
      day = day.toLowerCase();
      if (day == 'lundi'){
          //console.log("c'est lundi");
          if (data[0][pureClass][i].horaire[0].lundi == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[0].lundi;
          }
        } else if  (day == 'mardi') {
          //console.log("c'est mardi");
          if (data[0][pureClass][i].horaire[1].mardi == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[1].mardi;
          }
        } else if  (day == 'mercredi') {
          //console.log("c'est mercredi");
          if (data[0][pureClass][i].horaire[2].mercredi == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[2].mercredi;
          }
        } else if  (day == 'jeudi') {
          //console.log("c'est jeudi");
          if (data[0][pureClass][i].horaire[3].jeudi == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[3].jeudi;
          }
        } else if  (day == 'vendredi') {
          //.log("c'est vendredi");
          if (data[0][pureClass][i].horaire[4].vendredi == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[4].vendredi;
          }
        } else if  (day == 'samedi') {
          //console.log("c'est samedi");
          if (data[0][pureClass][i].horaire[5].samedi == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[5].samedi;
          }
        } else if  (day == 'dimanche') {
          //console.log("c'est dimanche");
          if (data[0][pureClass][i].horaire[6].dimanche == "none") {
            horaire.textContent = "Fermé";
          } else {
            horaire.textContent = data[0][pureClass][i].horaire[6].dimanche;
          }
        } else {
          console.log("c'est pas un jour");
        }
    })
  });

  

});

function retrive() {
  //console.log("retrive on action");
  let usermail = document.getElementById("usermail");
  //console.log(usermail.value);
  if (usermail.value != null && usermail.value != "")
  {
    fetch('http://localhost:3000/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({usermail: usermail.value})
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      let trueData = data.message;
      //console.log(trueData);
      let img = document.createElement("img");
      img.style.height = "200px";
      img.style.width = "200px";
      img.style.margin = "auto";
      img.id = "qrcode";
      img.src = trueData;
      let Promo = document.getElementById("Promo");
      Promo.innerHTML = "";
      Promo.appendChild(img);
    })
  }
}


    




    