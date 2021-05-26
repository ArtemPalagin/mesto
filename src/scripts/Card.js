export class Card {
    constructor(link, name, selector, handleCardClick) {
        this._link = link;
        this._name = name;
        this._selector = selector;
        this._imgurl = `url(${link})`;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplateClone = document.querySelector(this._selector).content.cloneNode(true);
        return cardTemplateClone;
    }

    createPlaces() {
        this._element = this._getTemplate();

        this._likeEventListeners();
        this._buttonEventListeners();
        this._imageEventListeners();

        const image = this._element.querySelector(".element__image");

        image.style.backgroundImage = this._imgurl;
        this._element.querySelector(".element__text").textContent = this._name;
        return this._element;
    }

    _likeEventListeners() {
        this._element.querySelector(".element__group").addEventListener("click", function (e) {
            e.target.classList.toggle("element__group_black");
        });
    }

    _buttonEventListeners() {
        this._element.querySelector(".element__delete-button").addEventListener("click", function (e) {
            e.target.closest(".element").remove();
        });
    }

    _imageEventListeners() {
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        });
    }
}