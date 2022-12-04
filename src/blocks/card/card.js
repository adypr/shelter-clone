export class Petcard {
  constructor(obj, num) {
    this.obj = obj;
    this.num = num;
  }

  render() {
    let petsPage = '';
    let currentPets = this.obj.slice(0, this.num);

    currentPets.forEach(({ id, name, img }) => {
      petsPage += `
        <div class="card" data-id="${id}">
            <div class="card__image">
                <img src=${img} alt=${name}>
            </div>
            <h4 class="card__title">${name}</h4>
            <div class="card__button">
                <button class="button button_big button_light">
                    <a href="#">Learn more</a>
                </button>
            </div>
        </div>
     `;
    });
    return petsPage;
  }
}
