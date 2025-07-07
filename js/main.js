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

// Videos Section JavaScript
let youtubeApiReady = false;

// Load YouTube IFrame API
function loadYouTubeAPI() {
    if (window.YT) {
        youtubeApiReady = true;
        initializePlayers();
        return;
    }
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Called when YouTube API is ready
function onYouTubeIframeAPIReady() {
    youtubeApiReady = true;
    initializePlayers();
}

// Initialize YouTube players
function initializePlayers() {
    if (!youtubeApiReady) return;

    const iframes = document.querySelectorAll('.video-iframe');
    iframes.forEach((iframe) => {
        const loadingIndicator = iframe.parentElement.querySelector('.loading-indicator');
        
        iframe.onload = function() {
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
                iframe.classList.add('loaded');
            }, 1000);
        };
    });
}

// Play video function
function playVideo(videoId) {
    const iframe = document.getElementById(videoId);
    const overlay = iframe.parentElement.querySelector('.video-overlay');
    
    overlay.classList.add('hidden');
    
    const src = iframe.src;
    const videoIdMatch = src.match(/embed\/([^?]+)/);
    if (videoIdMatch) {
        const youtubeVideoId = videoIdMatch[1];
        iframe.src = `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=1&mute=0&rel=0&modestbranding=1`;
    }
}

// Setup intersection observer for videos
function setupVideoIntersectionObserver() {
    const videoCards = document.querySelectorAll('.video-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target.querySelector('.video-iframe');
                if (!iframe.classList.contains('loaded')) {
                    iframe.src = iframe.src;
                }
            }
        });
    }, {
        threshold: 0.3
    });

    videoCards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize videos when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadYouTubeAPI();
    setupVideoIntersectionObserver();
});

// Expose functions to global scope
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
window.playVideo = playVideo;


let currentPlan = {};

function openPaymentModal(planName, price) {
    currentPlan = { name: planName, price: price };
    
    document.getElementById('selectedPlan').textContent = `Plan ${planName}`;
    document.getElementById('selectedPrice').textContent = `$${price}/mes`;
    document.getElementById('paymentButtonText').textContent = `Pagar $${price}`;
    
    document.getElementById('paymentModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
    // Limpiar formulario
    document.querySelector('.payment-form').reset();
}

// Formateo automático de tarjeta
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');

    // Formatear número de tarjeta
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19);
        e.target.value = formattedValue;
    });

    // Formatear fecha de expiración
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });

    // Solo números en CVV
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/gi, '');
    });
});

function processPayment(event) {
    event.preventDefault();
    
    const submitBtn = document.querySelector('.payment-submit-btn');
    const buttonText = document.getElementById('paymentButtonText');
    
    // Simular procesamiento
    submitBtn.disabled = true;
    buttonText.textContent = 'Procesando...';
    
    setTimeout(() => {
        buttonText.textContent = 'Pago Exitoso ✓';
        
        setTimeout(() => {
            closePaymentModal();
            
            // Mostrar mensaje de éxito
            alert(`¡Pago completado!\nPlan: ${currentPlan.name}\nMonto: $${currentPlan.price}\n\n¡Bienvenido a BuildTruck!`);
            
            // Redirigir a la aplicación
            window.open('https://buildtruck-99bc0.web.app', '_blank');
            
            // Restaurar botón
            submitBtn.disabled = false;
            buttonText.textContent = `Pagar $${currentPlan.price}`;
        }, 1500);
    }, 2000);
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        closePaymentModal();
    }
});
function processPayment(event) {
    event.preventDefault();
    
    const submitBtn = document.querySelector('.payment-submit-btn');
    const buttonText = document.getElementById('paymentButtonText');
    
    // Simular procesamiento
    submitBtn.disabled = true;
    buttonText.textContent = 'Procesando...';
    
    setTimeout(() => {
        buttonText.textContent = 'Pago Exitoso ✓';
        
        setTimeout(() => {
            closePaymentModal();
            
            // Mostrar mensaje bonito en lugar del alert
            showSuccessMessage();
            
            // Redirigir a la aplicación después de 3 segundos
            setTimeout(() => {
                window.open('https://buildtruck-99bc0.web.app', '_blank');
            }, 3000);
            
            // Restaurar botón
            submitBtn.disabled = false;
            buttonText.textContent = `Pagar $${currentPlan.price}`;
        }, 1500);
    }, 2000);
}

function showSuccessMessage() {
    // Crear el mensaje de éxito
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✓</div>
            <h3>¡Pago Completado!</h3>
            <p><strong>Plan:</strong> ${currentPlan.name}</p>
            <p><strong>Monto:</strong> $${currentPlan.price}/mes</p>
            <p class="success-redirect">Redirigiendo a BuildTruck en 3 segundos...</p>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Remover el mensaje después de 3.5 segundos
    setTimeout(() => {
        successDiv.remove();
    }, 3500);
}

