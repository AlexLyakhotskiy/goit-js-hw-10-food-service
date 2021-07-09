import menuCardTpl from '../templates/menu-cards.hbs';
import menuList from '../menu.json';

const menuContainer = document.querySelector('.js-menu');

menuContainer.insertAdjacentHTML('beforeend', menuCardTpl(menuList));
