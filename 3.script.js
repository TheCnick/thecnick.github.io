// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawerContainer = document.getElementById('drawer-container');
    const drawerContent = document.querySelector('.drawer-content');

    if (drawerContent && drawerContainer) {
        drawerContent.addEventListener('click', () => {
            // This is the ONLY place you should be modifying the drawer's open/close state.
            // DO NOT directly set element.style.transform here.
            drawerContainer.classList.toggle('is-open'); 
        });
    }

    // Optional: Close drawer when clicking outside
    document.addEventListener('click', (event) => {
        if (drawerContainer.classList.contains('is-open') && 
            !drawerContent.contains(event.target) && 
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
