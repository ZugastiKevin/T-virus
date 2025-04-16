

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
