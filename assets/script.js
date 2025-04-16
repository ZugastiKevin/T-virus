//script footer formulaire
const form = document.querySelector('#devisform');

form.addEventListener('submit', function(e) {
e.preventDefault();

form.reset();


const message = document.createElement('p');
message.textContent = "Devis envoyé !";
message.style.color = '#727070';
message.style.marginTop = '10px';

const bouton = form.querySelector('#devisform .submit-btn');
bouton.parentNode.appendChild(message)
setTimeout(() => {
    message.remove();
  }, 3000);
});


//Script devis
const formulaire = document.querySelector('#contactform');

formulaire.addEventListener('submit', function(e) {
e.preventDefault();

formulaire.reset();


const message = document.createElement('p');
message.textContent = "Message envoyé !";
message.style.color = '#727070';
message.style.marginTop = '10px';

const bouton = formulaire.querySelector('#contactform .submit-btn');
bouton.parentNode.appendChild(message)
setTimeout(() => {
    message.remove();
  }, 3000);
});
