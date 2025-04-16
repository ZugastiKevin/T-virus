//script footer formulaire
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