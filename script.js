let slideIndex = 0;

// Function to show the slide based on the index
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // Loop slide index when reaching the ends
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    // Calculate the offset for the slide transition
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Function to move to the next or previous slide
function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Automatic slide movement every 3 seconds
function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 3000);
}

// Start the auto sliding when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    autoSlide();
});
