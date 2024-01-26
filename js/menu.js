// Alvo
const menuControlOpen = document.getElementById("menu-control-open");
const menuControlClose = document.getElementById("menu-control-close");
const menuClotrolSearch = document.getElementById("submit-search");

// Escutadores
menuControlOpen.addEventListener("click", togleMenu);
menuControlClose.addEventListener("click", togleMenu);
menuClotrolSearch.addEventListener("click", togleMenu);


function togleMenu(event) {
  event.preventDefault(); 

  document.getElementById("menu-container").classList.toggle("active");
  // document.getElementsByTagName("body")[0].classList.toggle("boqueiaScroll");
}