const form = document.querySelector('#contactform');

form.addEventListener('submit', function(e) {
e.preventDefault();

form.reset();


const message = document.createElement('p');
message.textContent = "Message envoyé !";
message.style.color = '#727070';
message.style.marginTop = '10px';

const bouton = form.querySelector('#contactform .submit-btn');
bouton.parentNode.appendChild(message)
setTimeout(() => {
    message.remove();
  }, 3000);
});


// NAVBAR
const wrapper = document.querySelector(".search-wrapper");
const icon = wrapper.querySelector("i");
let scrolled = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 100 && !scrolled) {
    scrolled = true;
    wrapper.classList.add("compact");
    wrapper.classList.remove("active");
  } else if (scrollY <= 100 && scrolled) {
    scrolled = false;
    wrapper.style.animation = "slideUp 0.3s ease forwards";
    setTimeout(() => {
      wrapper.classList.remove("compact");
      wrapper.style.animation = "";
    }, 300);
  }
});

icon.addEventListener("click", () => {
  if (scrolled) {
    wrapper.classList.toggle("active");
  }
});
