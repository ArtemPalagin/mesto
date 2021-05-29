export class Card {
    constructor(cardData, selectores, myCardId, handleCardClick, popupOpened, addLike, deliteLike) {
        this._ownerId = cardData.owner._id
        this._link = cardData.link;
        this._name = cardData.name;
        this._likes = cardData.likes;
        this._likesNum = cardData.likes.length;
        this._cardId = cardData._id;

        this._selectores = selectores;
        this._myCardId = myCardId;
        this._imgurl = `url(${cardData.link})`;
        this._handleCardClick = handleCardClick;
        this._popupOpened = popupOpened;
        this._addLike = addLike;
        this._deliteLike = deliteLike;
    }

    _getTemplate() {
        let cardTemplateClone;
        
        if(this._ownerId == this._myCardId){
            cardTemplateClone = document.querySelector(this._selectores[1]).content.cloneNode(true);
        }else{
            cardTemplateClone = document.querySelector(this._selectores[0]).content.cloneNode(true);
        }
        
        return cardTemplateClone;
    }

    createPlaces() {
        this._element = this._getTemplate();

        this._likeEventListeners();
        if(this._element.querySelector(".element__delete-button") != null) {
            this._buttonEventListeners();
        }
        
        
        this._imageEventListeners();

        const image = this._element.querySelector(".element__image");
        image.style.backgroundImage = this._imgurl;
        this._element.querySelector(".element__text").textContent = this._name;
        for(let i = 0; i < this._likesNum; i++){
            if(this._likes[i]._id == "this._myCardId"){
                this._element.querySelector(".element__group").classList.add("element__group_black");
                i = this._likesNum;
            }
        }
        
        this._element.querySelector(".element__group-number").textContent = `${this._likesNum}`;

        return this._element;
    }

    _likeEventListeners() {
        this._element.querySelector(".element__group").addEventListener("click", (e) => {
            if(!e.target.classList.contains("element__group_black") ) {
                this._addLike(this._cardId, e.target.parentNode.querySelector(".element__group-number"), e.target);
            }else{
                this._deliteLike(this._cardId, e.target.parentNode.querySelector(".element__group-number"), e.target);
            }
        });
    }

    _buttonEventListeners() {
        this._element.querySelector(".element__delete-button").addEventListener("click", (e) => {
            this._popupOpened(this._cardId, e.target.closest(".element"));
        });    
    }

    _imageEventListeners() {
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        });
    }
}