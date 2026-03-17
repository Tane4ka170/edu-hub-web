// AOS
AOS.init({ duration: 1000, once: true });

// Menu
const hamburger = document.getElementById(".hamburger");
const menu = document.getElementById(".menu");

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
};
