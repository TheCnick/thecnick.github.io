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

    
var zoomBoxes = document.querySelectorAll('.SkullImage');
    zoomBoxes.forEach(function(image) {
  var imageCss = window.getComputedStyle(image, false),
    imageUrl = imageCss.backgroundImage
                       .slice(4, -1).replace(/['"]/g, '');
  // Get the original source image
  var imageSrc = new Image();
  imageSrc.onload = function() {
    var imageWidth = imageSrc.naturalWidth,
        imageHeight = imageSrc.naturalHeight,
        ratio = imageHeight / imageWidth;
    // Adjust the box to fit the image and to adapt responsively
    var percentage = ratio * 100 + '%';
    image.style.paddingBottom = percentage;
    // Zoom and scan on mousemove
    image.onmousemove = function(e) {
      // Get the width of the thumbnail
      var boxWidth = image.clientWidth,
          // Get the cursor position, minus element offset
          x = e.pageX - this.offsetLeft,
          y = e.pageY - this.offsetTop,
          // Convert coordinates to % of elem. width & height
          xPercent = x / (boxWidth / 100) + '%',
          yPercent = y / (boxWidth * ratio / 100) + '%';
      // Update styles w/actual size
      Object.assign(image.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: imageWidth + 'px'
      });
    };
    // Reset when mouse leaves
    image.onmouseleave = function(e) {
      Object.assign(image.style, {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      });
    };
  }
  imageSrc.src = imageUrl;
});
});
