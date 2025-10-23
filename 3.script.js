// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer2');

    setTimeout(() => {
        drawer.classList.add('is-open');
    }, 200); // Let's keep this at 200ms for now
});
