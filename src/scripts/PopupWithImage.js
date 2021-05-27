import {Popup} from "./Popup.js";
export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        this._imagePopupImage = this._popup.querySelector(".image-popup__image");
        this._description = this._popup.querySelector(".image-popup__text");
    }
    open(link, text){
        this._imagePopupImage.src = link;
        this._imagePopupImage.alt = "Не получилось загрузить изображение";
        this._description.textContent = text;
        

        return super.open();
        
    }
}