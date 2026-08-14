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

    
const container = document.querySelector('.FullPage');
const image = document.querySelector('.SkullImage');

container.addEventListener('mousemove', (e) => {
  // Calculate relative cursor position (0-100)
  const rect = container.getBoundingClientRect();
    
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  const moveX = x * -40;
  const moveY = y * -40;

  image.style.transform = `translate(${moveX}px, ${moveY}px)`;
 });
});
