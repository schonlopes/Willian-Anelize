let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.carousel-inner img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Muda de imagem a cada 3 segundos
}

document.querySelector('.prev').addEventListener('click', function () {
    slideIndex -= 2;
    showSlides();
});

document.querySelector('.next').addEventListener('click', function () {
    showSlides();
});
