// This is the entire content for your script.js file

document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the drawer element by its ID.
    // Make sure the ID here matches the ID in your HTML exactly.
    const drawer = document.getElementById('drawer-nav');

    // 2. Add the 'is-open' class to trigger the animation.
    // We use a small timeout to make sure the browser has rendered the drawer
    // in its hidden state before we try to animate it. This prevents the
    // animation from being skipped on some browsers.
    setTimeout(() => {
        drawer.classList.add('is-open');
    }, 200); // 200 milliseconds = 0.2 seconds
});
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
