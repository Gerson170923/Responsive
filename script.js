
        document.addEventListener('DOMContentLoaded', function () {
            const carouselContainer = document.querySelector('.carousel-container');
            const indicators = document.querySelectorAll('.indicator');
            let currentSlide = 0;
            const totalSlides = 5;
            const slideWidth = 100 / totalSlides;
        
            function goToSlide(slideIndex) {
                carouselContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === slideIndex);
                });
                currentSlide = slideIndex;
            }
        
            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                goToSlide(currentSlide);
            }
        
            // Cambiar automáticamente cada 3 segundos
            setInterval(nextSlide, 3000);
        
            // Controladores para los indicadores
            indicators.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    const slideIndex = parseInt(indicator.getAttribute('data-slide'));
                    goToSlide(slideIndex);
                });
            });
        
            // Inicializar el primer slide
            goToSlide(0);
        });
