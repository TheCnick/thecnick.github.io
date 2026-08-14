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

    window.addEventListener("mousemove", debounce(scroll));

function scroll(event) {
   var checkbox = document.getElementById("SkullImage");

   if (!checkbox || !checkbox.checked) {
      return;
   }

   var y = event.clientY;
   var x = event.clientX;

   var viewportWidth = document.documentElement.clientWidth;
   var viewportHeight = document.documentElement.clientHeight;
   var yPercentage = (y / viewportHeight) * (viewportHeight / 4);
   var xPercentage = (x / viewportWidth) * (viewportWidth / 4);

   window.scrollTo(xPercentage, yPercentage);
}

function debounce(func, wait, immediate) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}
});
