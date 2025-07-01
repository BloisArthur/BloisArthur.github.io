export function setupBurgerMenu() {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      const clickInside = burger.contains(event.target) || navLinks.contains(event.target);
      if (!clickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      }
    });
  }
}