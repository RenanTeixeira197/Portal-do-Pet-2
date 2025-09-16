const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})


//Carrossel

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

// ...existing code...
function showSlide(n) {
    index = (n + images.length) % images.length;
    track.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

//Troca automaticamente a cada 5 segundos
setInterval(() => showSlide(index + 1), 5000);
// ...existing code...