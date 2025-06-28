const toggleBtn = document.getElementById('toggleMenu');
const menu = document.querySelector('.menu-esquerdo');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('fechado');

    if (menu.classList.contains('fechado')) {
        toggleBtn.textContent = 'right_panel_close'
    } else {
        toggleBtn.textContent = 'left_panel_close'
    }
});