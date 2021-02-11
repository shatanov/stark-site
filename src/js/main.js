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
const selectorMetal = document.querySelector('.metal');
const body = document.querySelector('body');
const mobileNav = document.querySelector('.mobile__nav')
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const mediaWidth = window.matchMedia('(min-width: 990px)')
const mediaHeight = window.matchMedia('(max-height: 570px)')


const viewSelectContent = (index) => {
  if (selectContent[index].classList.contains('select__open')){
    selectContent[index].classList.remove('select__open');
    selectContent[index].style.display = 'none';
    if (index == 0){
      selectorMetal.style.marginTop = '0px'
    }
  } else {
    selectContent[index].classList.add('select__open');
    selectContent[index].style.display = 'block';
    if (index == 0){
      selectorMetal.style.marginTop = '260px'
    }
  }
}

const weidthCheck = (e) => {
  if (e.matches) {
    menuBtn.classList.remove('open-menu')
    mobileMenu.classList.remove('menu-active')
    body.classList.remove('overflow-hidden')
  }
}

const heightCheck = (e) => {
  if (e.matches){
    mobileNav.style.overflowY = 'auto'
    mobileNav.style.height = '135vh'
  }
}

const navMenuFunction = () => {
  menuBtn.classList.contains('open-menu')
    ? menuBtn.classList.remove('open-menu')
    : menuBtn.classList.add('open-menu');
  mobileMenu.classList.contains('menu-active')
    ? mobileMenu.classList.remove('menu-active')
    : mobileMenu.classList.add('menu-active');
  body.classList.contains('overflow-hidden')
    ? body.classList.remove('overflow-hidden')
    : body.classList.add('overflow-hidden');
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


mediaWidth.addListener(weidthCheck)
weidthCheck(mediaWidth)

mediaHeight.addListener(heightCheck)
heightCheck(mediaHeight)





