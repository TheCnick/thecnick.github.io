// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawerContainer = document.getElementById('drawer-container');
    const drawerImage = document.querySelector('.drawer-background-image');

    if (drawerImage && drawerContainer) {
        drawerImage.addEventListener('click', () => {
            // This is the ONLY place you should be modifying the drawer's open/close state.
            // DO NOT directly set element.style.transform here.
            drawerContainer.classList.toggle('is-open'); 
        });
    }

    // Optional: Close drawer when clicking outside
    document.addEventListener('click', (event) => {
        if (drawerContainer.classList.contains('is-open') && 
            !drawerImage.contains(event.target) && 
            !drawerContainer.contains(event.target)) {
            drawerContainer.classList.remove('is-open');
        }
    });

    document.addEventListener('keydown', function(e) {
         if (e.key === 'Enter') {
           drawerContainer.classList.toggle('is-open')
  }
});
    
});
