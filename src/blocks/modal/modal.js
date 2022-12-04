import {
  domElem, domList, addEvent, removeEvent
} from '../base/base';
import PETS from '../base/friends';
import PetModal from './petmodal';

const generateToolsModal = (obj) => {
  let modal = new PetModal('modal__container', obj);
  modal.renderModal();
  modal.generateContent();
  return modal;
};

export const addToolsClickHandler = (element) => {
  addEvent(domElem(element), 'click', (e) => {
    if (e.target.closest('.card')) {
      let targetId = e.target.closest('.card').getAttribute('data-id');
      generateToolsModal(PETS[targetId]);

      addEvent(domElem('.modal__overlay'), 'mouseover', (event) => {
        if (event.target.classList.contains('modal__overlay')) {
          domElem('#modal__button').classList.add('hover');
        }
      });
      addEvent(domElem('.modal__overlay'), 'mouseout', (event) => {
        if (event.target.classList.contains('modal__overlay')) {
          domElem('#modal__button').classList.remove('hover');
        }
      });
    }
  });
};
