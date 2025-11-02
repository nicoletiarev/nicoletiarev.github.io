document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.tarjeta-proyecto');

    projectCards.forEach(card => {
        card.style.cursor = 'pointer'; // Muestra el cursor de puntero

        card.addEventListener('click', function(event) {
            // Si el clic fue en un enlace <a> dentro de la tarjeta, dejamos que ese enlace funcione normalmente
            if (event.target.tagName === 'A' || event.target.closest('a')) {
                return;
            }

            // Si el clic fue en la tarjeta y no en un enlace, navegamos al data-href
            const href = this.dataset.href;
            if (href) {
                window.open(href, '_blank'); // Abre el enlace en una nueva pestaña
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainHeader = document.querySelector('.main-header');
    // const mainNav = document.querySelector('.main-nav'); // Este ya no es necesario si solo usas mainHeader
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Función para alternar la clase 'active'
    function toggleMenu() {
        mainHeader.classList.toggle('active');
    }

    // 1. Alterna el menú al hacer clic en el botón
    if (menuToggle) { // Añadido para evitar error si no encuentra el ID
        menuToggle.addEventListener('click', toggleMenu);
    }

    // 2. Cierra el menú automáticamente al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainHeader.classList.contains('active')) {
                toggleMenu(); // Llama a la función para cerrar el menú
            }
        });
    });
});