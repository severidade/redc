// Alvo
const menuControlOpen = document.getElementById("menu-control-open");
const menuControlClose = document.getElementById("menu-control-close");
const menuClotrolSearch = document.getElementById("submit-search");
const toggleDivice = document.getElementById("menu-container");

// Escutadores
menuControlOpen.addEventListener("click", toggleMenu);
menuControlClose.addEventListener("click", toggleMenu);
menuClotrolSearch.addEventListener("click", toggleMenu);


window.addEventListener('resize', removeMobileClass);
window.addEventListener('load', removeMobileClass);


function toggleMenu(event) {
  event.preventDefault(); 

  toggleDivice.classList.toggle("active");
  // document.getElementsByTagName("body")[0].classList.toggle("boqueiaScroll");
}

function removeMobileClass() {
  if (window.innerWidth > 1000) {
    toggleDivice.classList.remove("mobile");
    menuControlOpen.classList.remove("active");
    toggleDivice.classList.remove("active");
  } else {
    if (!menuControlOpen.classList.contains("active")) {
      menuControlOpen.classList.add("active");
    }
    if (!toggleDivice.classList.contains("mobile")) {
      toggleDivice.classList.add("mobile");
    }
  }
}
