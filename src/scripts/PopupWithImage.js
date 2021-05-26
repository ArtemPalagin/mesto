import {Popup} from "./Popup.js";
export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
    }
    open(link, text){
        imagePopupImage = this._popup.querySelector(".image-popup__image");
        imagePopupImage.src = link;
        imagePopupImage.alt = "Не получилось загрузить изображение";
        this._popup.querySelector(".image-popup__text").textContent = text;
        

        return super.open();
        
    }
}