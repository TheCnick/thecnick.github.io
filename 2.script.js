document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay'); // Get the overlay element

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active'); // Toggle active class on overlay
    }

    // Toggle sidebar and overlay when the menu icon is clicked
    menuToggle.addEventListener('click', toggleSidebar);

    // Close sidebar and overlay when the overlay itself is clicked
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Optional: Close sidebar if a link inside it is clicked
    // This assumes navigating away might also close it, or just for UX.
    // const sidebarLinks = sidebar.querySelectorAll('a');
    // sidebarLinks.forEach(link => {
    //     link.addEventListener('click', toggleSidebar);
    // });

        
  const container = document.querySelector('.FullPage');
  const image = document.querySelector('.SkullImage');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();

  // Cursor position as a percentage of the container
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  // Move image slightly with cursor
  const moveX = (x - 50) * 0.8;
  const moveY = (y - 50) * 0.8;

  // Zoom toward cursor
  image.style.transformOrigin = `${x}% ${y}%`;
  image.style.transform = `
    scale(1.9) 
    translate(${moveX}px, ${moveY}px)
  `;
});

container.addEventListener('mouseleave', () => {
  image.style.transformOrigin = 'center center';
  image.style.transform = 'translate(0, 0) scale(1)';
 });
});
