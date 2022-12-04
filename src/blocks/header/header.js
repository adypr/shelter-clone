import { domElem, addEvent } from '../base/base';

const logo = domElem('.header__logo');
const overlay = domElem('.nav__overlay');
const nav = domElem('.nav__toggle');
const burger = domElem('.nav__burger');
const body = domElem('body');

function toggle() {
  logo.classList.toggle('open');
  overlay.classList.toggle('open');
  nav.classList.toggle('open');
  burger.classList.toggle('open');
  body.classList.toggle('open');
}

function toggleMenu(e) {
  toggle();
  e.preventDefault();
  return false;
}

function toggleItems(e) {
  if (e.target.closest('.nav__item')) {
    toggle();
  }
}

addEvent(overlay, 'click', toggleMenu);
addEvent(nav, 'click', toggleItems);
addEvent(burger, 'click', toggleMenu);
