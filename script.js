// Animação de fade-in ao rolar
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Ativa a animação quando a seção está 20% visível na tela
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
};

// Executa ao carregar a página
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Executa ao rolar a página
window.addEventListener('scroll', revealOnScroll);