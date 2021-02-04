import './vendor/focus-visible.min.js';
import './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import  './functions/stop-scroll';

const menuBtn = document.querySelector('.menu-burger__header');
const mobileMenu = document.querySelector('.header__mobile--nav');
const navLink = document.querySelectorAll('.mobile__nav__link');

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

navLink.forEach((el) => {
  el.addEventListener('click', () => {
    navMenuFunction();
  })
});


const selectSingleCurrency = document.querySelector('.currency');
const selectSingleTitleCurrency = selectSingleCurrency.querySelector('.info__select__title');
const selectSingleLabelsCurrency = selectSingleCurrency.querySelectorAll('.info__select__label');


selectSingleTitleCurrency.addEventListener('click', () => {
    if ('active' === selectSingleCurrency.getAttribute('data-state')) {
      selectSingleCurrency.setAttribute('data-state', '');
    } else {
      selectSingleCurrency.setAttribute('data-state', 'active');
    }
});


// Close when click to option
for (let i = 0; i < selectSingleLabelsCurrency.length; i++) {
  selectSingleLabelsCurrency[i].addEventListener('click', (evt) => {
    selectSingleTitleCurrency.textContent = evt.target.textContent;
    selectSingleCurrency.setAttribute('data-state', '');
  });
}

const selectSingleMetal = document.querySelector('.metal');
const selectSingleTitleMetal = selectSingleMetal.querySelector('.info__select__title');
const selectSingleLabelsMetal = selectSingleMetal.querySelectorAll('.info__select__label');

selectSingleTitleMetal.addEventListener('click', () => {
  if ('active' === selectSingleMetal.getAttribute('data-state')) {
    selectSingleMetal.setAttribute('data-state', '');
  } else {
    selectSingleMetal.setAttribute('data-state', 'active');
  }
});


// Close when click to option
for (let i = 0; i < selectSingleLabelsMetal.length; i++) {
  selectSingleLabelsMetal[i].addEventListener('click', (evt) => {
    selectSingleTitleMetal.textContent = evt.target.textContent;
    selectSingleMetal.setAttribute('data-state', '');
  });
}


