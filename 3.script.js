// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer2');

    if (drawer) {
        console.log('Drawer element found.');
        
        // Ensure initial state is set before the browser paints anything
        drawer.style.transform = 'translateY(-100%)'; 
        drawer.classList.remove('is-open'); // Ensure 'is-open' is not there initially

        // Force a reflow (browser renders current state)
        // This is crucial for the transition to detect a change
        void drawer.offsetHeight; 

        console.log('Initial state set and reflow forced.');

        // Now, add the 'is-open' class after a very short delay
        setTimeout(() => {
            drawer.classList.add('is-open');
            console.log('is-open class added. Animation should start.');
        }, 50); // Small delay, just to be safe
    } else {
        console.error('Drawer element with ID "drawer2" not found!');
    }
});
