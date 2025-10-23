// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer2');

    if (drawer) {
        console.log('Drawer element found.'); // Confirm element is selected

        // Step 1: Ensure initial state is applied
        drawer.classList.remove('is-open'); // Make sure it starts closed
        drawer.style.transform = 'translateY(-100%)'; // Explicitly set initial hidden state

        // Step 2: Force browser to render this initial state immediately
        // This is crucial for transitions to work from a defined start point
        void drawer.offsetWidth; // This forces a reflow/re-render without affecting layout

        console.log('Initial transform applied and reflow forced.');

        // Step 3: Now, after a short delay, apply the 'open' class
        setTimeout(() => {
            drawer.classList.add('is-open');
            console.log('is-open class added.');
        }, 500); // Increased timeout to 500ms for easier observation

    } else {
        console.error('Drawer element with ID "drawer2" not found!');
    }
});
