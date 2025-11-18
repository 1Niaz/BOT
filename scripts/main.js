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



const sliderContainer2 = document.querySelector('.marketing__cards__list');
const sliderItems2 = document.querySelectorAll('.marketing__cards__item');
let startX2 = 0;
let currentX1 = 0;
let currentSlide2 = 0;
let isDragging2 = false;
const totalSlides2 = sliderItems2.length;

sliderContainer2.addEventListener('touchstart', (e) => {
    startX2 = e.touches[0].clientX;
    isDragging2 = true;
    sliderItems2.forEach(item => item.style.transition = 'none');
});

sliderContainer2.addEventListener('touchmove', (e) => {
    if (!isDragging2) return;
    currentX1 = e.touches[0].clientX;
    const diff = currentX1 - startX2;
    sliderItems2.forEach((item, index) => {
        item.style.transform = `translateX(${(-currentSlide2 * sliderItems2[0].offsetWidth) + diff}px)`;
    });
});

sliderContainer2.addEventListener('touchend', () => {
    isDragging2 = false;
    const diff = currentX1 - startX2;

    if (diff > 50) {
        currentSlide2 = Math.max(currentSlide2 - 1, 0);
    } else if (diff < -50) {
        currentSlide2 = Math.min(currentSlide2 + 1, totalSlides2 - 1);
    }

    sliderItems2.forEach(item => {
        item.style.transition = 'transform 0.3s ease';
        item.style.transform = `translateX(-${currentSlide2 * sliderItems2[0].offsetWidth}px)`;
    });
});

window.addEventListener('resize', () => {
    sliderItems2.forEach(item => {
        item.style.transform = `translateX(-${currentSlide2 * sliderItems2[0].offsetWidth}px)`;
    });
});





