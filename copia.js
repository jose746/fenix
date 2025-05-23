

document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const heroHeader = document.querySelector('.hero-header'); // Para calcular el offset del header

    // 1. Funcionalidad del botón de hamburguesa
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.querySelector('i').classList.toggle('fa-bars');
        hamburgerMenu.querySelector('i').classList.toggle('fa-times'); // Cambia el icono a una 'X'
    });

    // Cierra el menú al hacer clic en un enlace (útil en móvil)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerMenu.querySelector('i').classList.remove('fa-times');
                hamburgerMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    // 2. Navegación fija al hacer scroll
    // Obtenemos la altura del header para saber cuándo fijar el nav
    const heroHeaderHeight = heroHeader.offsetHeight;

    window.addEventListener('scroll', () => {
        // Si el scroll supera la altura del header, fijamos el nav
        if (window.scrollY > heroHeaderHeight) {
            mainNav.classList.add('fixed-nav');
            // Opcional: añade padding al body para evitar que el contenido "salte"
            // document.body.style.paddingTop = mainNav.offsetHeight + 'px';
        } else {
            mainNav.classList.remove('fixed-nav');
            // document.body.style.paddingTop = '0';
        }
    });
});
 