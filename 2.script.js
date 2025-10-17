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
});
