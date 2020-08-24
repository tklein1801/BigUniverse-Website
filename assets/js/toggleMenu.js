// Select Items
const nav_toggler = document.querySelector('.navbar-toggler');
const hamburger = document.querySelector('.menu-btn');

// Add EventListener
nav_toggler.addEventListener('click', toggleMenu);

// Set Initial State Of Menu
let activeMenu = false;

// Function
function toggleMenu() {
  if(!activeMenu) {
    // Toggle classes
    hamburger.classList.add('active');

    // Set Menu State
    activeMenu = true;
  } else {
    // Toggle classes
    hamburger.classList.remove('active');

    // Set Menu State
    activeMenu = false;
  }
}