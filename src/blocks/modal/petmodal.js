import {
  domElem, domList, addEvent, removeEvent
} from '../base/base';
import Modal from './classModal';

class PetModal extends Modal {
  constructor(classes, {
    id, name, img, type, breed, description, age, inoculations, diseases, parasites
  }) {
    super(classes);
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateContent() {
    let template = '';

    template += `<div class="modal__picture">
                    <img class="modal__img" src="${this.img}" alt="friend ${this.name}">
                </div>`;
    template += `<div class="modal__description">
                    <h3 class="modal__title">${this.name}</h3>
                    <h4 class="modal__subtitle">${this.type} - ${this.breed}</h4>
                    <p class="modal__text">${this.description}</p>
                    <ul class="modal__list">
                        <li class="modal__item"><b>Age:</b> ${this.age}</li>
                        <li class="modal__item"><b>Inoculations:</b> ${this.inoculations}</li>
                        <li class="modal__item"><b>Diseases:</b> ${this.diseases}</li>
                        <li class="modal__item"><b>Parasites:</b> ${this.parasites}</li>
                </div>`;

    return template;
  }

  renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
  }
}

export default PetModal;
