'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// ===============================
// FILTRO DE PORTAFOLIO
// ===============================

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");


// Abrir/cerrar selector
if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}


// Función para filtrar proyectos
const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    // Mostrar todos
    if (selectedValue === "todos") {

      filterItems[i].classList.add("active");

    }

    // Mostrar solamente la categoría seleccionada
    else if (selectedValue === filterItems[i].dataset.category) {

      filterItems[i].classList.add("active");

    }

    // Ocultar los demás
    else {

      filterItems[i].classList.remove("active");

    }
  }
};


// Selector móvil
for (let i = 0; i < selectItems.length; i++) {

  selectItems[i].addEventListener("click", function () {

    const selectedValueText = this.innerText.trim();
    const selectedValue = selectedValueText.toLowerCase();

    // Cambiar texto del selector
    if (selectValue) {
      selectValue.innerText = selectedValueText;
    }

    // Cerrar selector
    elementToggleFunc(select);

    // Filtrar
    filterFunc(selectedValue);

    // Actualizar botón activo
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active");

      if (
        filterBtn[j].innerText.trim().toLowerCase() === selectedValue
      ) {
        filterBtn[j].classList.add("active");
      }
    }

  });

}


// Botones de categorías
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    const selectedValue = this.innerText.trim().toLowerCase();

    // Actualizar selector
    if (selectValue) {
      selectValue.innerText = this.innerText.trim();
    }

    // Filtrar proyectos
    filterFunc(selectedValue);

    // Cambiar botón activo
    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }

    this.classList.add("active");

    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {

  navigationLinks[i].addEventListener("click", function () {

    const targetPage = this.dataset.navLink;

    for (let j = 0; j < pages.length; j++) {

      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
      }

    }

    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }

    this.classList.add("active");

    window.scrollTo(0, 0);
  });

}