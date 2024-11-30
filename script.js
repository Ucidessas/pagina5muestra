// Menú interactivo con animación y efecto de apertura/cierre
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const submenu = dropdown.querySelector('.submenu');
            submenu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            const submenu = dropdown.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });
});
