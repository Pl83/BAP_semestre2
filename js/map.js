
// menu deroulent 
var pharmabtn = document.querySelector(".pharmabtn");
console.log(pharmabtn);
var pharma = document.querySelectorAll(".pharma");
console.log(pharma);
pharmabtn.addEventListener("click", function() {
  if (pharma[0].style.display === "none") {
    pharma.forEach(element => {
      element.style.display = "block";
    });
  }
  else {
    pharma.forEach(element => {
      element.style.display = "none";
    });
  }
});

var boulbtn = document.querySelector(".boulbtn");
console.log(boulbtn);
var boul = document.querySelectorAll(".boul");
console.log(boul);
boulbtn.addEventListener("click", function() {
  if (boul[0].style.display === "none") {
    boul.forEach(element => {
      element.style.display = "block";
    });
  }
  else {
    boul.forEach(element => {
      element.style.display = "none";
    });
  }
});

var boubtn = document.querySelector(".boubtn");
console.log(boubtn);
var bou = document.querySelectorAll(".bou");
console.log(bou);
boubtn.addEventListener("click", function() {
  if (bou[0].style.display === "none") {
    bou.forEach(element => {
      element.style.display = "block";
    });
  }
  else {
    bou.forEach(element => {
      element.style.display = "none";
    });
  }
});



// tableaux associatifs des données
    const maplink = {
      /*Pharmacie*/ 1 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12862.533810542196!2d2.1951704735773747!3d48.81936285401958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b75d2433a71%3A0x6e6505ce3ee3115f!2sPharmacie%20Principale!5e0!3m2!1sfr!2sfr!4v1679590173136!5m2!1sfr!2sfr", 
      /*Pharmacie*/ 2 : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21016.29288631625!2d2.1951705!3d48.8193629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b8457169f1b%3A0x26ec8cd2495bba31!2sPharmacie%20des%20Cr%C3%A9neaux!5e0!3m2!1sfr!2sfr!4v1679590239777!5m2!1sfr!2sfr", 
      /*Pharmacie*/ 3 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21022.191467715027!2d2.149090379101567!3d48.8052931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b89dda96f07%3A0x4a9fdd76d0141846!2sPharmacie%20de%20la%20Pointe!5e0!3m2!1sfr!2sfr!4v1679590284375!5m2!1sfr!2sfr", 
      /*Pharmacie*/ 4 : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21016.29288631625!2d2.1951705!3d48.8193629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b83150059b1%3A0x48f2df7c73db0ea9!2sPharmacie%20des%20Ecoles%20%2F%20Selarl%20Pharmacie%20Lemare!5e0!3m2!1sfr!2sfr!4v1679590314566!5m2!1sfr!2sfr",
      /* boulanger*/ 5 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b861fa67b2d%3A0xf8d67839cb9d9001!2sOlivier%20Le%20Boulanger!5e0!3m2!1sfr!2sfr!4v1679591876637!5m2!1sfr!2sfr",
      /* boulanger*/ 6 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b89e74d5505%3A0xd178c004e4bf1412!2s%C3%80%20la%20Pointe%20de%20Chaville!5e0!3m2!1sfr!2sfr!4v1679592646883!5m2!1sfr!2sfr",
      /* boulanger*/ 7 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b82d8a520d5%3A0xc46f27b238708c06!2sBoulangerie%20-%20P%C3%A2tisserie%20Maison%20Perrier!5e0!3m2!1sfr!2sfr!4v1679592173222!5m2!1sfr!2sfr",
      /* boulanger*/ 8 : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17677.10255391474!2d2.1842736336141293!3d48.80637931869626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d49e9e8d9a1%3A0xa0c0da048157788!2sLa%20Gache!5e0!3m2!1sfr!2sfr!4v1679592319467!5m2!1sfr!2sfr",
    };

    const maptel = {
      /* Pharmacie */ 1 : "01.45.34.29.70",
      /* Pharmacie */ 2 : "01.47.50.50.38",
      /* Pharmacie */ 3 : "01.47.50.40.80",
      /* Pharmacie */ 4 : "01.47.50.48.98",
      /* boulanger*/ 5 : "01.47.50.18.71",
      /* boulanger*/ 6 : "01.47.50.17.54",
      /* boulanger*/ 7 : "01.47.50.42.25",
      /* boulanger*/ 8 : "01.30.21.33.11",
    };

    const mapsite = {
      /* Pharmacie */ 1 : "https://pharmacie-principale-92.pharminfo.fr/",
      /* Pharmacie */ 2 : "http://pharmaciedescreneaux-chaville.com/",
      /* Pharmacie */ 3 : "none",
      /* Pharmacie */ 4 : "https://pharmacie-ecole-chaville.mesoigner.fr/",
      /* boulanger*/ 5 : "none",
      /* boulanger*/ 6 : "https://m.facebook.com/pointedechaville",
      /* boulanger*/ 7 : "none",
      /* boulanger*/ 8 : "none",
    };

    const maploca = {
      /* Pharmacie */ 1 : "143 Grande Rue, 92310 Sèvres",
      /* Pharmacie */ 2 : "1059 Av. Roger Salengro, 92370 Chaville",
      /* Pharmacie */ 3 : "2025 Av. Roger Salengro, 92370 Chaville",
      /* Pharmacie */ 4 : "667 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 5 : "1520 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 6 : "2061 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 7 : "512 Av. Roger Salengro, 92370 Chaville",
      /* boulanger*/ 8 : "35 Av. du Général-Leclerc, 78220 Viroflay",
    };


// changer les donners de la carte et des infos
    const mapbtn = document.querySelectorAll(".mapbtn");
    mapbtn.forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById("map").src = maplink[btn.id];
        document.getElementById("tel").innerHTML = maptel[btn.id];
        document.getElementById("site").innerHTML = mapsite[btn.id];
        document.getElementById("loca").innerHTML = maploca[btn.id];
      })
    })


    // meteo

    /*function meteocall() {
      fetch('https://api.meteo-concept.com/api/forecast/daily/0?token=8b9e012cdfd29817fccf0690643de92992daf489a3baaa4dd9a90adc497d3f59&insee=92022')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        // console.log(data.forecast.weather);
        const weather = data.forecast.weather;
        if (weather == 0 || weather == 1 ){
          document.querySelector('#soleil').style.display = 'block';
        } else if (weather == 2 || weather == 3) {
          document.querySelector('#clair').style.display = 'block';
        } else if (weather == 4 || weather == 5) {
          document.querySelector('#nuage').style.display = 'block';
        } else if ( weather >=10 && weather <= 16 || weather >= 40 && weather <= 48 || weather >= 210 && weather <= 212) {
          document.querySelector('#pluie').style.display = 'block';
        } else if (weather >= 100 && weather <= 138) {
          document.querySelector('#orage').style.display = 'block';
        } else if ( weather >= 20 && weather <= 22 || weather >= 30 && weather <= 32 || weather >= 60 && weather <= 78 || weathe >= 220 && weather <= 222 || weather >= 230 && weather <= 232) {
          document.querySelector('#neige').style.display = 'block';
        } else {
          console.log('error');
        }
      });
    }*/


    /* 
    */