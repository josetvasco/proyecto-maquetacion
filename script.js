const imgMobile = document.querySelector('.img-mobile');
const navItem = document.querySelector('.nav-item');
const imgCerrar = document.querySelector('.icon-cerrar');

imgMobile.addEventListener('click', () => {
  navItem.classList.add('nav-item--active');
  imgMobile.classList.add('active-img');
  imgCerrar.classList.add('icon-cerrar--active');
})

imgCerrar.addEventListener('click', () => {
  navItem.classList.remove('nav-item--active');
  imgMobile.classList.remove('active-img');
  imgCerrar.classList.remove('icon-cerrar--active');
})