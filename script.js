let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveSlide(direction) {
    // Hide the current item
    items[currentIndex].classList.remove('active');

    // Calculate the next item index
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Show the next item
    items[currentIndex].classList.add('active');

    // Move the carousel inner container
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the first item as active
    items[0].classList.add('active');

    // Add event listeners to buttons
    document.querySelector('.carousel-control.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.carousel-control.next').addEventListener('click', () => moveSlide(1));
});
