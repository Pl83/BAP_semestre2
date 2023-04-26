    // meteo

    function meteocall() {
      fetch('https://api.meteo-concept.com/api/forecast/daily/0?token=8b9e012cdfd29817fccf0690643de92992daf489a3baaa4dd9a90adc497d3f59&insee=92022')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        //console.log(data.forecast.weather);
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
    }

    meteocall();


    dragElement(document.getElementById("meteo"));
      
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}