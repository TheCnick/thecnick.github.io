// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer2');

    // Make sure the drawer is initially in its hidden state,
    // then force a reflow to ensure the browser registers this state.
    drawer.style.transform = 'translateY(-100%)'; 
    drawer.offsetHeight; // Force reflow (read any computed style property)

    // Now, after a short delay, add the 'is-open' class to trigger the animation.
    setTimeout(() => {
        drawer.classList.add('is-open');
    }, 50); // Reduced timeout to 50ms, as reflow handles the immediate rendering.
});
