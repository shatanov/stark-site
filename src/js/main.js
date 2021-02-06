import './vendor/focus-visible.min.js';
import './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import  './functions/stop-scroll';

const menuBtn = document.querySelector('.menu-burger__header');
const mobileMenu = document.querySelector('.header__mobile--nav');
const navLink = document.querySelectorAll('.mobile__nav__link');
const infoSelect = document.querySelectorAll('.info__select');
const selectContent = document.querySelectorAll('.select__content');

const viewSelectContent = (index) => {
  if (selectContent[index].classList.contains('select__open')){
    selectContent[index].classList.remove('select__open');
    selectContent[index].style.display = 'none';

  } else {
    selectContent[index].classList.add('select__open');
    selectContent[index].style.display = 'block'
  }
}

const navMenuFunction = () => {
  menuBtn.classList.contains('open-menu')
    ? menuBtn.classList.remove('open-menu')
    : menuBtn.classList.add('open-menu');
  mobileMenu.classList.contains('menu-active')
    ? mobileMenu.classList.remove('menu-active')
    : mobileMenu.classList.add('menu-active');

}



menuBtn.addEventListener('click', () => {
  navMenuFunction();
});

navLink.forEach(el => {
  el.addEventListener('click', () => {
    navMenuFunction();
  })
});


infoSelect.forEach((el, index) => {
  el.addEventListener('click', () => viewSelectContent(index))
})






