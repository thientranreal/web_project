let menu_bar = document.getElementById('menu-bars');
let menu_close = document.getElementById('menu-close');
let modal_container = document.getElementById('modal-container');
let slider_content = document.getElementsByClassName('slider-content');

menu_bar.addEventListener('click', () => {
    modal_container.classList.add('show');
});

let close_menu = function() {
    modal_container.classList.remove('show');
};

menu_close.addEventListener('click', close_menu);

window.addEventListener('resize', close_menu);