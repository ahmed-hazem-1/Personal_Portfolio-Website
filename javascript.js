
// Wrap the code in an IIFE to avoid polluting the global scope
(function () {
    // Select the elements
    const navList = document.getElementById('nav-list');
    const navBar = document.getElementById('nav-bar');
    const menuIcon = document.getElementById('menu-icon');

    // Function to toggle the navigation
    function toggleNavigation() {
        navList.classList.toggle('show-nav');
    }

    // Event listener for menu icon click
    menuIcon.addEventListener('click', toggleNavigation);

    // Event listener for window resize
    window.addEventListener('resize', function () {
        // Close the navigation when the window is resized
        if (window.innerWidth > 600) {
            navList.classList.remove('show-nav');
        } 
    });
})();
const textToType = "Ahmed Hazem Elabady";
const typingSpeed = 50; // Adjust the typing speed in milliseconds
const pauseDuration = 1000; // 1 second pause between repetitions

function typeText(element, text, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Pause for 1 second before restarting the typing animation
      setTimeout(function () {
        element.textContent = '';
        i = 0;
        type(); // Restart the typing animation
      }, pauseDuration);
    }
  }
  type();
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.getElementById('typingText');
  typeText(nameElement, textToType, typingSpeed);
});