const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", function() {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
});

const inputMessage = document.getElementById('input-message');
    const btnValider = document.getElementById('btn-valider');
    const messagesDiv = document.getElementById('messages');

    // Ajouter un événement click au bouton valider
    btnValider.addEventListener('click', function() {
      const message = inputMessage.value.trim();

      // Vérifier si le champ d'input n'est pas vide
      if (message !== '') {
        // Créer un élément div pour afficher le message
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'Moi : ' + message;

        // Ajouter le message à la div des messages
        messagesDiv.appendChild(messageDiv);
        messageDiv.classList.add('user');
        
        if (message.toLowerCase() === 'bonjour' || message.toLowerCase() === 'salut' || message.toLowerCase() === 'hello' || message.toLowerCase() === 'yo' || message.toLowerCase() === 'coucou' || message.toLowerCase() === 'bonsoir' || message.toLowerCase() === 'bonjour !' || message.toLowerCase() === 'salut !' || message.toLowerCase() === 'hello !' || message.toLowerCase() === 'yo !' || message.toLowerCase() === 'coucou !' || message.toLowerCase() === 'bonsoir !') {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = 'Bot : Bonjour, comment puis-je vous aider ?';
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }
        
        else if (message.toLowerCase().includes('comment') && message.toLowerCase().includes('marche') && message.toLowerCase().includes('page')) {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Bot : Cette page marche avec googlemap. Sur le coter vous trouverz un menu déroulant chaque catégories contient plussieur adresse choisie avec soin";
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }

        else if (message.toLowerCase().endsWith('quoi') || message.toLowerCase().endsWith('quoi ?')) {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Bot : feur";
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }

        else if (
          message.toLowerCase().includes('mon') && message.toLowerCase().includes('magasin') && message.toLowerCase().includes("n'") 
          || 
          message.toLowerCase().includes('ma') && message.toLowerCase().includes('boutique') && message.toLowerCase().includes("n'") 
          ||
          message.toLowerCase().includes('mon') && message.toLowerCase().includes('magasin') && message.toLowerCase().includes("pas")
          ||
          message.toLowerCase().includes('ma') && message.toLowerCase().includes('boutique') && message.toLowerCase().includes("pas")
          ||
          message.toLowerCase().includes('magasin') && message.toLowerCase().includes('vois') && message.toLowerCase().includes("pas") 
          ||
          message.toLowerCase().includes('boutique') && message.toLowerCase().includes('vois') && message.toLowerCase().includes("pas")
          ||
          message.toLowerCase().includes('magasin') && message.toLowerCase().includes('trouve') && message.toLowerCase().includes("pas")
          ||
          message.toLowerCase().includes('boutique') && message.toLowerCase().includes('trouve') && message.toLowerCase().includes("pas")
          ){
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Bot : Si votre magasin n'est pas dans la liste, vous pouvez nous contacter. Nous examineront votre demande dans les plus bref delais ( le 30 février)";
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }

        else if (
          message.toLowerCase().includes('contact') && message.toLowerCase().includes('nous') 
          || 
          message.toLowerCase().includes('contact') && message.toLowerCase().includes('vous')  
          ){
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Bot : Vous pouvez nous contacter par mail à l'adresse suivante : user1@example.com. Ou par téléphone au 06 00 00 00 00. Nous vous répondrons dans les plus bref delais ( le 30 février)";
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }

        else if (
          message.toLowerCase().includes('suprimez')  
          || 
          message.toLowerCase().includes('retire')  
          ){
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Bot : Pour retirez votre site, contacter nous par mail à l'adresse suivante : user1@example.com ou par téléphone au 06 00 00 00 00. Nous vous répondrons dans les plus bref delais ( le 30 février)";
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }
        
        else {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = 'Bot : Je n\'ai pas compris votre message. pouvez-vous reformuler ?';
          messagesDiv.appendChild(reponseDiv);
          reponseDiv.classList.add('bot');
        }

        // Vider le champ d'input
        inputMessage.value = '';
      }
    });

const btn = document.querySelectorAll('button');
console.log(btn);

btn.forEach(element => {
  element.addEventListener('mousedown', function() {
    element.style.transform = 'scale(0.9)';
  });
  element.addEventListener('mouseup', function() {
    element.style.transform = 'scale(1)';
  });
});




//Make the DIV element draggagle:
dragElement(document.getElementById("open-popup"));
      
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