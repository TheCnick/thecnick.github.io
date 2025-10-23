// This is the entire content for your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer2');

    if (drawer) {
        setTimeout(() => {
            drawer.classList.add('is-open');
        }, 200);
    } else {
        console.error('Drawer element with ID "drawer2" not found!');
    }
});
