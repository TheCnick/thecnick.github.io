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

let isZoomed = false;
let currentX = 50;
let currentY = 50;

// Updates the transform & origin smoothly
function applyTransform(x, y, scale) {
  currentX = x;
  currentY = y;

  const moveX = (x - 50) * 0.8;
  const moveY = (y - 50) * 0.8;

  image.style.transformOrigin = `${x}% ${y}%`;
  image.style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
}

function zoomIn(x = 50, y = 50) {
  isZoomed = true;
  container.classList.add('is-zoomed');
  container.setAttribute('aria-expanded', 'true');
  applyTransform(x, y, 1.9);
}

function zoomOut() {
  isZoomed = false;
  container.classList.remove('is-zoomed');
  container.setAttribute('aria-expanded', 'false');
  image.style.transformOrigin = 'center center';
  image.style.transform = 'translate(0, 0) scale(1)';
}

function toggleZoom(x = 50, y = 50) {
  if (isZoomed) {
    zoomOut();
  } else {
    zoomIn(x, y);
  }
}

// 1. Click to toggle zoom
container.addEventListener('click', (e) => {
  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  toggleZoom(x, y);
});

// 2. Mousemove pans only when already zoomed
container.addEventListener('mousemove', (e) => {
  if (!isZoomed) return;

  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  applyTransform(x, y, 1.9);
});

// 3. Keyboard controls
container.addEventListener('keydown', (e) => {
  // Enter or Space -> Toggle Zoom
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault(); // Prevents page scrolling on spacebar
    toggleZoom(50, 50);
  }

  // Escape -> Zoom out
  if (e.key === 'Escape' && isZoomed) {
    zoomOut();
  }

  // Arrow keys -> Pan around while zoomed
  if (isZoomed) {
    const step = 10; // % step for keyboard panning
    let newX = currentX;
    let newY = currentY;

    if (e.key === 'ArrowLeft') newX = Math.max(0, currentX - step);
    if (e.key === 'ArrowRight') newX = Math.min(100, currentX + step);
    if (e.key === 'ArrowUp') newY = Math.max(0, currentY - step);
    if (e.key === 'ArrowDown') newY = Math.min(100, currentY + step);

    if (newX !== currentX || newY !== currentY) {
      e.preventDefault(); // Prevents page scroll on arrow keys
      applyTransform(newX, newY, 1.9);
    }
  }
});
});
