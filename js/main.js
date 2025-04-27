// JavaScript para el funcionamiento del FAQ

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar todos los items abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el estado del item actual
            item.classList.toggle('active');
        });
    });
});


/////////////////////

var tl = new TimelineMax({
    repeat: 0
});

tl.fromTo(
    "#greentruck",
    13,
    { x: -280, repeat: 0, transformOrigin: "50% 50%" },
    { x: 470, transformOrigin: "50% 50%", delay: 0, ease: Expo.easeInOut }
    ).to("#greentruck", 2.3, {
    delay: 2,
    x: 450,
    ease: Elastic.easeInOut,
    yoyo: true,
    repeat: -1,
    repeatDelay: 4
});

TweenMax.fromTo(
    ".load",
    2,
{
        y: -8,
        scaleX: 1,
        rotation: 0,
        repeat: -1,
        transformOrigin: "50% 0%",
        yoyo: true
},
{
    y: -8,
    rotation: -6,
    scaleX: 1,
    transformOrigin: "50% 0%",
    repeat: -1,
    delay: 0,
    yoyo: true,
    ease: Power2.easeInOut
}
);

var tl2 = new TimelineMax({
    repeat: -1,
    yoyo: true
});

tl2
.fromTo(
    ".lifter",
    8,
{ delay: 0, x: 0, repeat: 0, transformOrigin: "50% 50%" },
{
    x: -110,
    transformOrigin: "50% 50%",
    delay: 0,
    ease: Sine.easeInOut,
    repeatDelay: 1
}
)
.to(".lifter", 2.3, {
    delay: 2,
    x: 0,
    ease: Sine.easeInOut,
    yoyo: true,
    repeat: -1,
    repeatDelay: 4
});

var tl3 = new TimelineMax({
repeat: -1,
yoyo: true
});

tl3
.fromTo(
    ".ropegroup",
    8,
{ delay: 2, y: 0, repeat: 0, transformOrigin: "50% 50%" },
{
    y: 110,
    transformOrigin: "50% 50%",
    delay: 2,
    ease: Sine.easeInOut,
    repeatDelay: 1
}
)
.to(".ropegroup", 2.3, {
    delay: 2,
    y: 0,
    ease: Sine.easeInOut,
    yoyo: true,
    repeat: -1,
    repeatDelay: 4
});

var tl4 = new TimelineMax({
    repeat: -1,
    yoyo: true
});

tl4
.fromTo(
    ".rope",
    8,
{ delay: 2, scaleY: 1, repeat: 0, transformOrigin: "50% 0%" },
{
    scaleY: 9,
    transformOrigin: "50% 0%",
    delay: 2,
    ease: Sine.easeInOut,
    repeatDelay: 1
}
)
.to(".rope", 2.3, {
    scaleY: 0,
    delay: 2,
    x: 0,
    ease: Sine.easeInOut,
    yoyo: true,
    repeat: -1,
    repeatDelay: 4
});

TweenMax.fromTo(
"#Mixer",
12,
{
    delay: 3,
    x: 710,
    repeat: 0,
    transformOrigin: "50% 50%",
    repeat: -1,
    yoyo: true
},
{
    x: 0,
    transformOrigin: "50% 50%",
    delay: 0,
    ease: Sine.easeInOut,
    repeat: -1,
    yoyo: true,
    delay: 2,
    repeatDelay: 9
}
);

TweenMax.fromTo(
"#Bulldozer",
0.05,
{
    delay: 0,
    x: 0,
    y: 0,
    repeat: 0,
    transformOrigin: "50% 50%",
    repeat: -1,
    yoyo: true
},
{
    x: -0.2,
    y: 0.4,
    rotate: 1,
    transformOrigin: "50% 50%",
    delay: 0,
    ease: Elastic.easeInOut,
    repeat: -1,
    yoyo: true
}
);

/////////////////////

// script para cambiar el header a hamburguesa al hacer scroll
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const hamburger = document.getElementById('hamburger');

let isScrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('mobile-header');
        hamburger.style.display = 'flex'; // <-- Aquí lo hace visible
        nav.style.display = 'none'; // Oculta los links normales
        isScrolled = true;
    } else {
        header.classList.remove('mobile-header');
        hamburger.style.display = 'none'; // <-- Aquí lo oculta de nuevo
        nav.style.display = 'flex'; // Muestra los links normales
        nav.classList.remove('show-nav');
        isScrolled = false;
    }
});

// Toggle al hacer click
hamburger.addEventListener('click', () => {
    if (nav.classList.contains('show-nav')) {
        nav.classList.remove('show-nav');
        nav.style.display = 'none';
    } else {
        nav.classList.add('show-nav');
        nav.style.display = 'flex';
    }
});

// Cerrar si el mouse sale
nav.addEventListener('mouseleave', () => {
    if (isScrolled) {
        nav.classList.remove('show-nav');
        nav.style.display = 'none';
    }
});

// --- Smooth Scroll Manual con cierre de menú ---
const menuLinks = document.querySelectorAll('nav a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar comportamiento por defecto

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100, // Ajusta el offset si tu header tiene altura fija
                behavior: 'smooth'
            });

            // Si el menú hamburguesa está abierto, lo cerramos
            if (nav.classList.contains('show-nav')) {
                nav.classList.remove('show-nav');
                nav.style.display = 'none';
            }
        }
    });
});


