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
        messageDiv.textContent = message;

        

        // Ajouter le message à la div des messages
        messagesDiv.appendChild(messageDiv);

        
        if (message.toLowerCase() === 'bonjour') {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = 'Bonjour, comment puis-je vous aider ?';
          messagesDiv.appendChild(reponseDiv);
        }
        
        else if (message.toLowerCase().includes('comment') && message.toLowerCase().includes('marche') && message.toLowerCase().includes('page')) {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Cette page marche avec googlemap. Sur le coter vous trouverz un menu déroulant chaque catégories contient plussieur adresse choisie avec soin";
          messagesDiv.appendChild(reponseDiv);
        }

        else if (message.toLowerCase().endsWith('quoi') || message.toLowerCase().endsWith('quoi ?')) {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "feur";
          messagesDiv.appendChild(reponseDiv);
        }

        else if (
          message.toLowerCase().includes('mon') && message.toLowerCase().includes('magasin') && message.toLowerCase().includes("n'") 
          || 
          message.toLowerCase().includes('ma') && message.toLowerCase().includes('boutique') && message.toLowerCase().includes("n'") 
          ||
          message.toLowerCase().includes('mon') && message.toLowerCase().includes('magasin') && message.toLowerCase().includes("pas")
          ||
          message.toLowerCase().includes('ma') && message.toLowerCase().includes('boutique') && message.toLowerCase().includes("pas")
          ){
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Si votre magasin n'est pas dans la liste, vous pouvez nous contacter. Nous examineront votre demande dans les plus bref delais ( le 30 février)";
          messagesDiv.appendChild(reponseDiv);
        }

        else if (
          message.toLowerCase().includes('contact') && message.toLowerCase().includes('nous') 
          || 
          message.toLowerCase().includes('contact') && message.toLowerCase().includes('vous')  
          ){
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = "Vous pouvez nous contacter par mail à l'adresse suivante : user1@example.com. Ou par téléphone au 06 00 00 00 00. Nous vous répondrons dans les plus bref delais ( le 30 février)";
          messagesDiv.appendChild(reponseDiv);
        }
        
        else {
          const reponseDiv = document.createElement('div');
          reponseDiv.textContent = 'Je n\'ai pas compris votre message. pouvez-vous reformuler ?';
          messagesDiv.appendChild(reponseDiv);
        }

        // Vider le champ d'input
        inputMessage.value = '';
      }
    });

    