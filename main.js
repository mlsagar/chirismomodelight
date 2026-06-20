const openButton = document.querySelector(".menu-toggle-open");
const closeButton = document.querySelector(".menu-toggle-close");
const navMenu = document.querySelector("#primary-navigation");

// Function to open the menu
function openMenu() {
    openButton.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-active');
    closeButton.focus(); // Shift focus inside for accessibility
}

// Function to close the menu
function closeMenu() {
    openButton.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-active');
    openButton.focus(); // Return focus to the open button
}

// Event Listeners
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// Close menu if user presses the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        closeMenu();
    }
});

// Reset menu if window resizes past mobile view
const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', (e) => {
    if (!e.matches) {
        navMenu.classList.remove('is-active');
        openButton.setAttribute('aria-expanded', 'false');
    }
});