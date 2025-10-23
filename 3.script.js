document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('drawer');
    const drawerToggle = document.getElementById('drawer-toggle');

    if (drawerToggle && drawer) {
        drawerToggle.addEventListener('click', () => {
            drawer.classList.toggle('is-open');
            drawerToggle.classList.toggle('is-open');

            const icon = drawerToggle.querySelector('i');
            if (icon) {
                if (drawer.classList.contains('is-open')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            }
        });
    } else {
        console.error('Drawer or drawer-toggle element not found!');
    }
});
