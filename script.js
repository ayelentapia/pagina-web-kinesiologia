function mostrarInfo(id) {

    // Cerramos cualquier información que esté abierta
    const infos = document.querySelectorAll(".info-detallada");

    infos.forEach(function(info) {
        info.style.display = "none";
    });

    // Buscamos la información que corresponde al botón
    const infoSeleccionada = document.getElementById(id);

    // La mostramos
    infoSeleccionada.style.display = "block";

    // Bajamos hasta esa información
    infoSeleccionada.scrollIntoView({
        behavior: "smooth"
    });
}


function cerrarInfo() {

    // Cerramos todas las informaciones
    const infos = document.querySelectorAll(".info-detallada");

    infos.forEach(function(info) {
        info.style.display = "none";
    });

    // Volvemos a las cartas
    document.getElementById("mis-servicios").scrollIntoView({
        behavior: "smooth"
    });
}

// MENU HAMBURGUESA

const menuToggle = document.getElementById("menu-toggle");
const menuNavegacion = document.getElementById("menu-navegacion");
const menuOverlay = document.getElementById("menu-overlay");
const linksMenu = document.querySelectorAll(".menu-links a");


function abrirCerrarMenu() {

    const abierto = menuNavegacion.classList.toggle("activo");

    menuToggle.classList.toggle("activo");
    menuOverlay.classList.toggle("activo");

    document.body.classList.toggle("menu-abierto");

    menuToggle.setAttribute("aria-expanded", abierto);

}


function cerrarMenu() {

    menuNavegacion.classList.remove("activo");
    menuToggle.classList.remove("activo");
    menuOverlay.classList.remove("activo");

    document.body.classList.remove("menu-abierto");

    menuToggle.setAttribute("aria-expanded", "false");

}


menuToggle.addEventListener("click", abrirCerrarMenu);

menuOverlay.addEventListener("click", cerrarMenu);


linksMenu.forEach(function(link) {

    link.addEventListener("click", cerrarMenu);

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        cerrarMenu();
    }

});

// ANIMACIONES AL HACER SCROLL

const elementosReveal = document.querySelectorAll(".reveal, .reveal-delay");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});


elementosReveal.forEach(function(elemento) {

    observer.observe(elemento);

});
