// Alvo
const menuControlOpen = document.getElementById("menu-control-open");
const menuControlClose = document.getElementById("menu-control-close");
const toggleDivice = document.getElementById("menu-container");
const menuClotrolSearch = document.getElementById("submit-search");
const searchDesktop = document.getElementById("form-search");

const ctaElements = document.getElementsByClassName("display");

// Escutadores
menuControlOpen.addEventListener("click", toggleMenu);
menuControlClose.addEventListener("click", toggleMenu);
menuClotrolSearch.addEventListener("click", toggleSearch);



window.addEventListener('resize', removeMobileClass);
window.addEventListener('load', removeMobileClass);


function toggleMenu(event) {
  event.preventDefault(); 

  toggleDivice.classList.toggle("active");
  // document.getElementsByTagName("body")[0].classList.toggle("boqueiaScroll");
}

function toggleSearch() {
  if (window.innerWidth > 1000) {
    searchDesktop.classList.toggle("active_search_desktop");

    // Itera sobre todos os elementos do menu com a classe display
    for (const element of ctaElements) {
        element.classList.toggle("hide");
    }
  } else {
    for (const element of ctaElements) {
      element.classList.remove("hide");
    }
    if (searchDesktop.classList.contains("active_search_desktop")) {
      searchDesktop.classList.remove("active_search_desktop");
    }
  }
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
    toggleSearch();
  }
}

