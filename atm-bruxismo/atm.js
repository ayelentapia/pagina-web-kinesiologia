// ATM y Bruxismo - mejoras de interacción
(function () {
  "use strict";

  // 1. Sombra en el menú al hacer scroll
  var header = document.querySelector(".atm-header");
  function marcarScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  marcarScroll();
  window.addEventListener("scroll", marcarScroll, { passive: true });

  // 2. Botón flotante de WhatsApp: visible fuera del hero y fuera del cierre
  var flotante = document.getElementById("wa-flotante");
  var hero = document.querySelector(".atm-hero");
  var cierre = document.querySelector(".cta-atm");

  if (flotante && hero && "IntersectionObserver" in window) {
    var heroVisible = true;
    var cierreVisible = false;

    function actualizarFlotante() {
      flotante.classList.toggle("visible", !heroVisible && !cierreVisible);
    }

    new IntersectionObserver(function (entradas) {
      heroVisible = entradas[0].isIntersecting;
      actualizarFlotante();
    }).observe(hero);

    if (cierre) {
      new IntersectionObserver(function (entradas) {
        cierreVisible = entradas[0].isIntersecting;
        actualizarFlotante();
      }).observe(cierre);
    }
  }

  // 3. Preguntas frecuentes: una abierta a la vez
  var preguntas = document.querySelectorAll(".faq-atm-item");
  preguntas.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      preguntas.forEach(function (otra) {
        if (otra !== item) otra.open = false;
      });
    });
  });
})();
