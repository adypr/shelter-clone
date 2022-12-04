import '../modal/modal';

import {
  domElem, domList, addEvent, removeEvent
} from '../base/base';
import { Petcard } from '../card/card';
import PETS from '../base/friends';

const arrows = domList('.button_round');

const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const carousel = domElem('.friends-short__carousel');
const itemLeft = domElem('#friends-short__items_left');
const itemRight = domElem('#friends-short__items_right');

let cardsOnSlider;

const renderSlider = () => {
  if (document.documentElement.clientWidth >= 1280) {
    cardsOnSlider = 3;
  } else if (document.documentElement.clientWidth >= 768) {
    cardsOnSlider = 2;
  } else cardsOnSlider = 1;
  let sliderList = [];
  let count = 1;
  // while (count <= cardsOnSlider) {
  // let card = PETS[Math.floor(Math.random() * 8)];
  // if (!sliderList.filter((elem) => elem.id === card.id)) {
  //   sliderList.push(card);
  //   count += 1;
  // }
  // }
  sliderList = [...PETS];
  let slide = new Petcard(sliderList, 3);
  return slide.render();
};

const moveCarousel = () => {
  removeEvent(arrowLeft, 'click', moveLeft);
  removeEvent(arrowRight, 'click', moveRight);
};

const moveLeft = () => {
  carousel.classList.add('transition-left');
  moveCarousel();
};

const moveRight = () => {
  carousel.classList.add('transition-right');
  moveCarousel();
};

const addCarousel = () => {
  addEvent(arrowLeft, 'click', moveLeft);
  addEvent(arrowRight, 'click', moveRight);
};

addCarousel();

addEvent(carousel, 'animationend', (event) => {
  addCarousel();
  let changedItem;
  if (event.animationName === 'move-left') {
    carousel.classList.remove('transition-left');
    changedItem = itemLeft;
    domElem('#friends-short__items_active').innerHTML = itemLeft.innerHTML;
  } else {
    carousel.classList.remove('transition-right');
    changedItem = itemRight;

    domElem('#friends-short__items_active').innerHTML = itemRight.innerHTML;
  }
  changedItem.innerHTML = '';
  changedItem.insertAdjacentHTML('afterBegin', renderSlider());
});
