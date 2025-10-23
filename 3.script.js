// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer2');

    // Make sure 'drawer' is not null before trying to add a class
    if (drawer) {
        setTimeout(() => {
            drawer.classList.add('is-open');
        }, 200); // Give it a moment to ensure CSS is parsed
    } else {
        console.error('Drawer element with ID "drawer2" not found!');
    }
});
