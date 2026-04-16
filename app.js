// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Form submission - CORREGIDO PARA ENVÍO REAL
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;
    
    // Cambiar botón a estado de carga
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Crear FormData con los datos del formulario
    const formData = new FormData(this);
    
    // Enviar usando fetch API a Formspree
    fetch('https://formspree.io/f/mblyvrjl', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Éxito - mostrar modal y resetear formulario
            this.reset();
            showModal();
        } else {
            // Error en la respuesta
            alert('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
        }
    })
    .catch(error => {
        // Error de red
        console.error('Error:', error);
        alert('Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.');
    })
    .finally(() => {
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
});

// Modal functions
function showModal() {
    document.getElementById('success-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('success-modal').classList.remove('show');
}

// Close modal when clicking outside
document.getElementById('success-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Form field animations
document.querySelectorAll('.form-field input, .form-field select, .form-field textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});