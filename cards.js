import { getResource } from "../services/services";


function cards() {
    class Card {
        constructor(img, alt, title, text, price, parent, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = parent;
            this.transfer = 37;
            this.classes = classes;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        render() {
            const card = document.createElement('div');
            card.classList.add('menu__item');
            this.classes.forEach(className => card.classList.add(className))
            card.innerHTML =
                `<img src=${this.img} alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.text} </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
            this.parent.append(card);
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => { // деструктуризируем каждый объект
                new Card(img, altimg, title, descr, price, cardsParent).render();
            });
        });
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));
    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({ img, altimg, title, descr, price }) => { // деструктуризируем каждый объект
    //             new Card(img, altimg, title, descr, price, cardsParent).render();
    //         });
    //     });

    function createCard(data) {

        data.forEach(({ img, altimg, title, descr, price }) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');

            element.innerHTML =
                `<img src=${img} alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr} </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>`;

            cardsParent.append(element);
        })
    }
    const cardsParent = document.querySelector('.cards');
    cardsParent.innerHTML = '';
}
export default cards;