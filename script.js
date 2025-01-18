// Debug-friendly script
document.addEventListener('DOMContentLoaded', () => {
    // Select the gallery and buttons
    const gallery = document.querySelector('.image-gallery');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    if (!gallery || !leftBtn || !rightBtn) {
      console.error("Gallery or buttons are not found in the DOM.");
      return;
    }
  
    // Define the amount to scroll (pixels)
    const scrollAmount = 300;
  
    // Scroll left when the left button is clicked
    leftBtn.addEventListener('click', () => {
      gallery.scrollBy({
        left: -scrollAmount, // Scroll to the left
        behavior: 'smooth', // Smooth scrolling
      });
    });
  
    // Scroll right when the right button is clicked
    rightBtn.addEventListener('click', () => {
      gallery.scrollBy({
        left: scrollAmount, // Scroll to the right
        behavior: 'smooth', // Smooth scrolling
      });
    });
  
    console.log("Buttons are wired up and ready!");
  });
  