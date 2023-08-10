function createCarousel(container) {
  const items = container.querySelectorAll('img'); // Get all images inside the container
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }

  // Show the first item initially
  showItem(currentIndex);

  // Add event listeners to the "Next" and "Previous" buttons
  const nextBtn = container.nextElementSibling;
  const prevBtn = container.previousElementSibling;
  nextBtn.addEventListener('click', nextItem);
  prevBtn.addEventListener('click', prevItem);
}

// Call the function for each carousel container
document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.image-main, .nba-Image, .whatsapp-image');
  carousels.forEach(createCarousel);
});