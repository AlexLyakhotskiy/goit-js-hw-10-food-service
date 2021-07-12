import menuCardTpl from '../templates/menu-cards.hbs';
import menuList from '../menu.json';

const menuContainer = document.querySelector('.js-menu');
const themeToggle = document.querySelector('#theme-switch-toggle');

menuContainer.insertAdjacentHTML('beforeend', menuCardTpl(menuList));

themeToggle.addEventListener('change', onThemeToggleSwitch);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('settings') || Theme.LIGHT;
document.body.classList.add(currentTheme);
if (currentTheme === Theme.DARK) {
  themeToggle.checked = true;
}

function onThemeToggleSwitch() {
  if (themeToggle.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('settings', Theme.DARK);
    return;
  }
  document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('settings', Theme.LIGHT);
}
