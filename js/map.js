
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
      /*Pharmacie*/ 1 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12862.533810542196!2d2.1951704735773747!3d48.81936285401958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b75d2433a71%3A0x6e6505ce3ee3115f!2sPharmacie%20Principale!5e0!3m2!1sfr!2sfr!4v1679590173136!5m2!1sfr!2sfr", 
      /*Pharmacie*/ 2 : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21016.29288631625!2d2.1951705!3d48.8193629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b8457169f1b%3A0x26ec8cd2495bba31!2sPharmacie%20des%20Cr%C3%A9neaux!5e0!3m2!1sfr!2sfr!4v1679590239777!5m2!1sfr!2sfr", 
      /*Pharmacie*/ 3 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21022.191467715027!2d2.149090379101567!3d48.8052931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b89dda96f07%3A0x4a9fdd76d0141846!2sPharmacie%20de%20la%20Pointe!5e0!3m2!1sfr!2sfr!4v1679590284375!5m2!1sfr!2sfr", 
      /*Pharmacie*/ 4 : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21016.29288631625!2d2.1951705!3d48.8193629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b83150059b1%3A0x48f2df7c73db0ea9!2sPharmacie%20des%20Ecoles%20%2F%20Selarl%20Pharmacie%20Lemare!5e0!3m2!1sfr!2sfr!4v1679590314566!5m2!1sfr!2sfr",
      /* boulanger*/ 5 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b861fa67b2d%3A0xf8d67839cb9d9001!2sOlivier%20Le%20Boulanger!5e0!3m2!1sfr!2sfr!4v1679591876637!5m2!1sfr!2sfr",
      /* boulanger*/ 6 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b89e74d5505%3A0xd178c004e4bf1412!2s%C3%80%20la%20Pointe%20de%20Chaville!5e0!3m2!1sfr!2sfr!4v1679592646883!5m2!1sfr!2sfr",
      /* boulanger*/ 7 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b82d8a520d5%3A0xc46f27b238708c06!2sBoulangerie%20-%20P%C3%A2tisserie%20Maison%20Perrier!5e0!3m2!1sfr!2sfr!4v1679592173222!5m2!1sfr!2sfr",
      /* boulanger*/ 8 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d49e9e8d9a1%3A0xa0c0da048157788!2sLa%20Gache!5e0!3m2!1sfr!2sfr!4v1679592319467!5m2!1sfr!2sfr",
      /* boucher */ 9: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.342321949279!2d2.1920789!3d48.81352959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b847edb119b%3A0xc51113370662b5f6!2sLa%20Ferme%20de%20Chaville!5e0!3m2!1sfr!2sfr!4v1682328063139!5m2!1sfr!2sfr",
      /* boucher */ 10: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.6094857403973!2d2.1889015!3d48.808431399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67bbbe2d67175%3A0xb7bc40b08580811b!2sPaul%20le%20Boucher!5e0!3m2!1sfr!2sfr!4v1682328160934!5m2!1sfr!2sfr",
      /* boucher */ 11: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.029101863063!2d2.1868007!3d48.8004232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b8b13978035%3A0xdfb11493d1ec0ad0!2sBoucherie%20Saint%20Hubert!5e0!3m2!1sfr!2sfr!4v1682328258306!5m2!1sfr!2sfr",
      /* restau */ 12: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.606802781924!2d2.1884192!3d48.8084826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b88a4ffb6b7%3A0xd85f708de5ea4528!2sLes%20Canailleries%20du%20March%C3%A9!5e0!3m2!1sfr!2sfr!4v1682329026652!5m2!1sfr!2sfr",
      /* restau */ 13: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.1240457126137!2d2.1980556!3d48.798611099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67beccae044f9%3A0x842b34d9c4ea0be9!2sLa%20Pergola!5e0!3m2!1sfr!2sfr!4v1682329048173!5m2!1sfr!2sfr",
      /* restau */ 14: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.305920831553!2d2.1930791999999997!3d48.81422419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b836558a8cd%3A0x1e51c6fff9ded96d!2sLe%20Tilleli&#39;s%20Coffee!5e0!3m2!1sfr!2sfr!4v1682329113965!5m2!1sfr!2sfr",
      /* restau */ 15: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.350528655274!2d2.1918599999999993!3d48.813373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67bc4152f8a7b%3A0x936890482972039d!2sAu%20Bureau%20Chaville!5e0!3m2!1sfr!2sfr!4v1682329201503!5m2!1sfr!2sfr",
      /* restau */ 16: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.2202042644676!2d2.1942851!3d48.8158598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b8322e1994d%3A0xb8d230960428d622!2sYamada%20Restaurant!5e0!3m2!1sfr!2sfr!4v1682329224918!5m2!1sfr!2sfr",
      /* restau */ 17: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.259787388878!2d2.1937142000000005!3d48.8151045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b6fe4e0c8d5%3A0xf62cb3aa1d0fbb2a!2sLa%20Scampia!5e0!3m2!1sfr!2sfr!4v1682329276972!5m2!1sfr!2sfr",
    };

    // numero de telephone
    const maptel = {
      /* Pharmacie */ 1 : "01.45.34.29.70",
      /* Pharmacie */ 2 : "01.47.50.50.38",
      /* Pharmacie */ 3 : "01.47.50.40.80",
      /* Pharmacie */ 4 : "01.47.50.48.98",
      /* boulanger*/ 5 : "01.47.50.18.71",
      /* boulanger*/ 6 : "01.47.50.17.54",
      /* boulanger*/ 7 : "01.47.50.42.25",
      /* boulanger*/ 8 : "01.30.21.33.11",
      /* boucher */ 9: "01.47.09.56.94",
      /* boucher */ 10: "01.47.50.02.99",
      /* boucher */ 11: "01.74.74.30.07",
      /* restau */ 12: "01.71.22.18.75",
      /* restau */ 13: "01.47.09.26.61",
      /* restau */ 14: "09.73.62.55.04",
      /* restau */ 15: "01.47.50.15.39",
      /* restau */ 16: "01.47.50.16.87",
      /* restau */ 17: "01.70.68.34.59",
    };

    // lien site internet
    const mapsite = {
      /* Pharmacie */ 1 : "https://pharmacie-principale-92.pharminfo.fr/",
      /* Pharmacie */ 2 : "http://pharmaciedescreneaux-chaville.com/",
      /* Pharmacie */ 3 : "none",
      /* Pharmacie */ 4 : "https://pharmacie-ecole-chaville.mesoigner.fr/",
      /* boulanger*/ 5 : "none",
      /* boulanger*/ 6 : "https://m.facebook.com/pointedechaville",
      /* boulanger*/ 7 : "none",
      /* boulanger*/ 8 : "none",
      /* boucher */ 9: "https://www.ville-chaville.fr/annuaire-de-la-ville-701/la-ferme-de-chaville-772.html?cHash=f96955d9fc43a0d565a7934db6687da3",
      /* boucher */ 10: "https://www.facebook.com/Paul-Le-Boucher-106909511045519",
      /* boucher */ 11: "none",
      /* restau */ 12: "http://lescanailleriesdumarche.fr/",
      /* restau */ 13: "http://lapergola92.com/",
      /* restau */ 14: "none",
      /* restau */ 15: "https://www.aubureau.fr/restaurant/?ville=AB_CHAVILLE&y_source=1_NTc2NDk4OTAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      /* restau */ 16: "https://yamadachaville.fr/",
      /* restau */ 17: "https://www.facebook.com/pizzeriachaville/",
    };

    // adresse
    const maploca = {
      /* Pharmacie */ 1 : "143 Grande Rue, 92310 Sèvres",
      /* Pharmacie */ 2 : "1059 Av. Roger Salengro, 92370 Chaville",
      /* Pharmacie */ 3 : "2025 Av. Roger Salengro, 92370 Chaville",
      /* Pharmacie */ 4 : "667 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 5 : "1520 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 6 : "2061 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 7 : "512 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 8 : "35 Av. du Général-Leclerc, 78220 Viroflay",
      /* boucher */ 9: "902 Av. Roger Salengro, 92370 Chaville",
      /* boucher */ 10: "21 Rue des Fontaines Marivel, 92370 Chaville",
      /* boucher */ 11: "2 Rue du Pavé de Meudon, 92370 Chaville",
      /* restau */ 12: "15 Pl. du Marché, 92370 Chaville",
      /* restau */ 13: "15 Rte Sablée, 92370 Chaville",
      /* restau */ 14: "Av. Roger Salengro, 92370 Chaville",
      /* restau */ 15: "2 Parv. Robert Schuman, 92370 Chaville",
      /* restau */ 16: "585 Av. Roger Salengro, 92370 Chaville",
      /* restau */ 17: "667 Av. Roger Salengro, 92370 Chaville",
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
    })

    
    /*
  
    */