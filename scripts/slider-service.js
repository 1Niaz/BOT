const sliderContainer = document.querySelector('.services');
const sliderItems = document.querySelectorAll('.service');
let startX = 0;
let currentX = 0;
let currentSlide = 0;
let isDragging = false;
const totalSlides = sliderItems.length;

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    sliderItems.forEach(item => item.style.transition = 'none');
});

sliderContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    sliderItems.forEach((item, index) => {
        item.style.transform = `translateX(${(-currentSlide * sliderItems[0].offsetWidth) + diff}px)`;
    });
});

sliderContainer.addEventListener('touchend', (e) => {
    isDragging = false;
    const diff = currentX - startX;
    
    if (diff > 50) {
        currentSlide = Math.max(currentSlide - 1, 0);
    } else if (diff < -50) {
        currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
    }
    
    sliderItems.forEach(item => {
        item.style.transition = 'transform 0.3s ease';
        item.style.transform = `translateX(-${currentSlide * sliderItems[0].offsetWidth}px)`;
    });
});

window.addEventListener('resize', () => {
    sliderItems.forEach(item => {
        item.style.transform = `translateX(-${currentSlide * sliderItems[0].offsetWidth}px)`;
    });
});

