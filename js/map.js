
// menu deroulent 
var pharmabtn = document.querySelector(".pharmabtn");
var pharma = document.querySelectorAll(".pharma");

var boulbtn = document.querySelector(".boulbtn");
var boul = document.querySelectorAll(".boul");

var boubtn = document.querySelector(".boubtn");
var bou = document.querySelectorAll(".bou");

var restbtn = document.querySelector(".restbtn");
var rest = document.querySelectorAll(".rest");

pharmabtn.addEventListener("click", function() {
  if (pharma[0].style.display === "none") {
    pharma.forEach(element => {
      element.style.display = "block";
    });
    boul.forEach(element => {
      element.style.display = "none";
    });
    bou.forEach(element => {
      element.style.display = "none";
    });
    rest.forEach(element => {
      element.style.display = "none";
    });
  }
  else {
    pharma.forEach(element => {
      element.style.display = "none";
    });
  }
});

boulbtn.addEventListener("click", function() {
  if (boul[0].style.display === "none") {
    boul.forEach(element => {
      element.style.display = "block";
    });
    pharma.forEach(element => {
      element.style.display = "none";
    });
    bou.forEach(element => {
      element.style.display = "none";
    });
    rest.forEach(element => {
      element.style.display = "none";
    });
  }
  else {
    boul.forEach(element => {
      element.style.display = "none";
    });
  }
});

boubtn.addEventListener("click", function() {
  if (bou[0].style.display === "none") {
    bou.forEach(element => {
      element.style.display = "block";
    });
    pharma.forEach(element => {
      element.style.display = "none";
    });
    boul.forEach(element => {
      element.style.display = "none";
    });
    rest.forEach(element => {
      element.style.display = "none";
    });
  }
  else {
    bou.forEach(element => {
      element.style.display = "none";
    });
  }
});

restbtn.addEventListener("click", function() {
  if (rest[0].style.display === "none") {
    rest.forEach(element => {
      element.style.display = "block";
    });
    pharma.forEach(element => {
      element.style.display = "none";
    });
    boul.forEach(element => {
      element.style.display = "none";
    });
    bou.forEach(element => {
      element.style.display = "none";
    });
  }
  else {
    rest.forEach(element => {
      element.style.display = "none";
    });
  }
});


// tableaux associatifs des données

    // Lien google map
    const maplink = {
      /*Pharmacie*/ 1 : "", 
      /*Pharmacie*/ 2 : "", 
      /*Pharmacie*/ 3 : "", 
      /*Pharmacie*/ 4 : "",
      /* boulanger*/ 5 : "",
      /* boulanger*/ 6 : "",
      /* boulanger*/ 7 : "",
      /* boulanger*/ 8 : "",
      /* boucher */ 9: "",
      /* boucher */ 10: "",
      /* boucher */ 11: "",
      /* restau */ 12: "",
      /* restau */ 13: "",
      /* restau */ 14: "",
      /* restau */ 15: "",
      /* restau */ 16: "",
      /* restau */ 17: "",
    };

    // numero de telephone
    const maptel = {
      /* Pharmacie */ 1 : "",
      /* Pharmacie */ 2 : "",
      /* Pharmacie */ 3 : "",
      /* Pharmacie */ 4 : "",
      /* boulanger*/ 5 : "",
      /* boulanger*/ 6 : "",
      /* boulanger*/ 7 : "",
      /* boulanger*/ 8 : "",
      /* boucher */ 9: "",
      /* boucher */ 10: "",
      /* boucher */ 11: "",
      /* restau */ 12: "",
      /* restau */ 13: "",
      /* restau */ 14: "",
      /* restau */ 15: "",
      /* restau */ 16: "",
      /* restau */ 17: "",
    };

    // lien site internet
    const mapsite = {
      /* Pharmacie */ 1 : "",
      /* Pharmacie */ 2 : "",
      /* Pharmacie */ 3 : "none",
      /* Pharmacie */ 4 : "",
      /* boulanger*/ 5 : "none",
      /* boulanger*/ 6 : "",
      /* boulanger*/ 7 : "none",
      /* boulanger*/ 8 : "none",
      /* boucher */ 9: "",
      /* boucher */ 10: "",
      /* boucher */ 11: "none",
      /* restau */ 12: "",
      /* restau */ 13: "",
      /* restau */ 14: "none",
      /* restau */ 15: "",
      /* restau */ 16: "",
      /* restau */ 17: "",
    };

    // adresse
    const maploca = {
      /* Pharmacie */ 1 : "",
      /* Pharmacie */ 2 : "",
      /* Pharmacie */ 3 : "",
      /* Pharmacie */ 4 : "",
      /* boulanger*/ 5 : "",
      /* boulanger*/ 6 : "",
      /* boulanger*/ 7 : "",
      /* boulanger*/ 8 : "",
      /* boucher */ 9: "",
      /* boucher */ 10: "",
      /* boucher */ 11: "",
      /* restau */ 12: "",
      /* restau */ 13: "",
      /* restau */ 14: "",
      /* restau */ 15: "",
      /* restau */ 16: "",
      /* restau */ 17: "",
    };

    // horaire ouverture

    const maphoraire = {
      /* Pharmacie */ 1 : {
        /* lundi */ 1 : "8h00 - 20h30",
        /* mardi */ 2 : "8h00 - 20h30",
        /* mercredi */ 3 : "8h00 - 20h30",
        /* jeudi */ 4 : "8h00 - 20h30",
        /* vendredi */ 5 : "8h00 - 20h30",
        /* samedi */ 6 : "9h00 - 20h00",
        /* dimanche */ 7 : "none",
      }
    };

// changer les donners de la carte et des infos
    const mapbtn = document.querySelectorAll(".mapbtn");
    mapbtn.forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById("map").src = maplink[btn.id];
        document.getElementById("tel").innerHTML = maptel[btn.id];
        if (mapsite[btn.id] == "none") {
          document.getElementById("cartouche_site").style.display = "none";
        } else {
          document.getElementById("cartouche_site").style.display = "flex";
          document.getElementById("site").href = mapsite[btn.id];
          document.getElementById("site").innerHTML = "Lien site";
        }
        document.getElementById("loca").innerHTML = maploca[btn.id];
      })
    });

    // get the data from the database

    fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

    /*
    Username : admin
    Password : cViz2xBYEcCRvsfN
    */