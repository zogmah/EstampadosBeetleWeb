//Script simple para abrir el menú hamburguesa
const menuIcon = document.querySelector('.navbar img');
const menu = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//Script para cerrar el menú hamburguesa si detecta un clic fuera del menu
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove('active');
    }
});

//Script para mostrar un mensaje y redirigir al index una vez se simule la compra
document.addEventListener("DOMContentLoaded", () => {
    const formCompra = document.getElementById("formCompra");

    if (formCompra) {
        formCompra.addEventListener("submit", function(e) {
            e.preventDefault(); // Evita que recargue la página
            alert("Compra simulada exitosamente!");
            window.location.href = "index.html"; // Redirección al index
        });
    }
});
