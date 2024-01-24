// Alvo
const menuControlOpen = document.getElementById("menu-control-open");
const menuControlClose = document.getElementById("menu-control-close");

// Escutadores
menuControlOpen.addEventListener("click", togleMenu)
menuControlClose.addEventListener("click", togleMenu)


function togleMenu(event) {
  document.getElementById("menu-container").classList.toggle("active");
  // document.getElementsByTagName("body")[0].classList.toggle("boqueiaScroll");
}