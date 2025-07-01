import { setupBurgerMenu } from './burgerMenu.js';

fetch('/15_html_presets/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    setupBurgerMenu(); 
    
  });
