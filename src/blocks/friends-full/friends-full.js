import '../modal/modal';
import {
  domElem, domList, addEvent, shuffle
} from '../base/base';
import { Petcard } from '../card/card';
import PETS from '../base/friends';

let petsList = [];
let currentPage = 1;
let petcard;

for (let i = 1; i <= 6; i += 1) {
  petsList = petsList.concat(shuffle([...PETS]));
}

let cardsOnPage;
let firstCard;
let lastCard;
const renderCards = () => {
  if (document.documentElement.clientWidth >= 1280) {
    cardsOnPage = 8;
  } else if (document.documentElement.clientWidth >= 768) {
    cardsOnPage = 6;
  } else cardsOnPage = 3;
  firstCard = (currentPage - 1) * cardsOnPage;
  lastCard = firstCard + cardsOnPage;
  petcard = new Petcard(petsList.slice(firstCard, lastCard), cardsOnPage);
  let petContainer = domElem('.friends-full__items');
  petContainer.innerHTML = '';
  petContainer.insertAdjacentHTML('afterBegin', petcard.render());
};

renderCards();

addEvent(document, 'DOMContentLoaded', function () {
  window.onresize = function () {
    renderCards();
  };
});

const pagination = domList('.friends-full__pagination .button_round');
let [dback, back, current, forward, dforward] = pagination;

let pages = Math.ceil(petsList.length / cardsOnPage);

const forwardEnabled = () => {
  forward.classList.remove('button_disabled');
  dforward.classList.remove('button_disabled');
};
const forwardDisabled = () => {
  forward.classList.add('button_disabled');
  dforward.classList.add('button_disabled');
};

const backEnabled = () => {
  back.classList.remove('button_disabled');
  dback.classList.remove('button_disabled');
};
const backDisabled = () => {
  back.classList.add('button_disabled');
  dback.classList.add('button_disabled');
};

addEvent(forward, 'click', () => {
  if (currentPage < pages) {
    currentPage += 1;
    current.textContent = `${currentPage}`;
    backEnabled();
  }
  if (currentPage === pages) {
    backEnabled();
    forwardDisabled();
  }
  renderCards();
});

addEvent(dforward, 'click', () => {
  if (currentPage < pages) {
    currentPage = pages;
    current.textContent = `${currentPage}`;
    backEnabled();
    forwardDisabled();
  }
  renderCards();
});

addEvent(back, 'click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    current.textContent = `${currentPage}`;
    forwardEnabled();
  }
  if (currentPage === 1) {
    forwardEnabled();
    backDisabled();
  }
  renderCards();
});

addEvent(dback, 'click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    current.textContent = `${currentPage}`;
    forwardEnabled();
    backDisabled();
  }
  renderCards();
});
