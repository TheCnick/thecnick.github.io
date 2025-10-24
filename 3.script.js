// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawerContainer = document.getElementById('drawer-container');
    const header = document.querySelector('.drawer-header');

    if (header && drawerContainer) {
        header.addEventListener('click', () => {
            // This is the ONLY place you should be modifying the drawer's open/close state.
            // DO NOT directly set element.style.transform here.
            drawerContainer.classList.toggle('is-open'); 
        });
    }

    // Optional: Close drawer when clicking outside
    document.addEventListener('click', (event) => {
        if (drawerContainer.classList.contains('is-open') && 
            !drawerContainer.contains(event.target) && 
            !header.contains(event.target)) {
            drawerContainer.classList.remove('is-open');
        }
    });
});
