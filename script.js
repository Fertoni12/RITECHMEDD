//Transicion del slide

const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4000, // Cambia cada 3 segundos
        disableOnInteraction: false, // No detiene el autoplay al interactuar
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Permite que los puntos sean clicables
    },
    speed: 1000, // Transición entre diapositivas de 1 segundo
    effect: 'slide', // Efecto de deslizamiento entre las imágenes
});

// Forzar la actualización de Swiper cuando se redimensiona la pantalla
window.addEventListener('resize', () => {
    swiper.update(); // Vuelve a calcular tamaños y posiciones
});



//Trancision suave de desvanecimiento del slide
// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 1,
//     autoplay: {
//         delay: 3000, // Cambia cada 3 segundos
//         disableOnInteraction: false, // No detiene el autoplay al interactuar
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,  // Permite que los puntos sean clicables
//     },
//     effect: 'fade', // Efecto de desvanecimiento
//     fadeEffect: {
//         crossFade: true,
//     },
//     on: {
//         init: function () {
//             this.slides.forEach((slide) => {
//                 slide.style.opacity = '0'; // Inicia todas las diapositivas con opacidad 0
//                 slide.style.transition = 'opacity 1.5s ease'; // Transición suave para opacidad
//             });
//             this.slides[this.activeIndex].style.opacity = '1'; // Muestra la diapositiva activa
//         },
//         slideChange: function () {
//             // Cambia la opacidad de las diapositivas al cambiar
//             this.slides.forEach((slide) => {
//                 slide.style.opacity = '0'; // Oculta todas las diapositivas
//             });
//             this.slides[this.activeIndex].style.opacity = '1'; // Muestra la diapositiva activa
//         },
//     },
// });



// Seleccionamos todos los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Función para activar el menú correcto
function activateMenu() {
    const currentPage = window.location.pathname.split('/').pop(); // Obtener solo el nombre del archivo

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Al cargar la página, activamos el menú correcto
window.onload = () => {
    activateMenu();
};

// Agregar el evento de clic a cada opción del menú
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        activateMenu(); // Vuelve a llamar a la función para asegurarte que el elemento correcto esté activo
    });
});


// También activar el menú correcto al hacer clic en otros enlaces
const cardLinks = document.querySelectorAll('.card-link'); // Cambia .card-link por la clase real de tus cards
cardLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Aquí no necesitamos hacer nada porque la activación del menú se maneja al cargar la página
    });
});







/* _______________________________ */
 //Funcion para el header estatico 

// Detectar el scroll del usuario
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // El usuario está desplazándose hacia abajo
        header.style.top = '-100px'; // Oculta el header
    } else {
        // El usuario está desplazándose hacia arriba
        header.style.top = '0'; // Muestra el header
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos en scroll
});





// MENU DESPLEGABLE PARA MOVILES
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const headerBottom = document.querySelector('.header-bottom');

    menuToggle.addEventListener('click', function () {
        console.log("Icono de menú clickeado"); // Confirmación de clic
        headerBottom.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

// Cerrar el menú al hacer clic fuera del menú
document.addEventListener('click', (event) => {
    const menuToggle = document.getElementById('mobile-menu');
    const headerBottom = document.querySelector('.header-bottom');
    
    const isClickInside = headerBottom.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInside && headerBottom.classList.contains('active')) {
        headerBottom.classList.remove('active');
        menuToggle.classList.remove('active'); // Restaurar el ícono de hamburguesa
    }
});

//ANIMACION CARDS
// Seleccionar todas las tarjetas
const cards = document.querySelectorAll('.card');

// Función para verificar si el elemento está en la vista
const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
};

// Aplicar la clase 'in-view' cuando la tarjeta está en la vista
const handleScroll = () => {
    cards.forEach(card => {
        if (isInView(card)) {
            card.classList.add('in-view');
        }
    });
};

// Escuchar el evento scroll para activar las animaciones
window.addEventListener('scroll', handleScroll);

// Ejecutar la función al cargar la página para las tarjetas visibles inicialmente
handleScroll();

  //________________________________________



