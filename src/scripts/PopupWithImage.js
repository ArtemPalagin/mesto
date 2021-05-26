import {Popup} from "./Popup.js";
export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
    }
    open(link, text){
        document.querySelector(this._selector).querySelector(".image-popup__image").src = link;
        document.querySelector(this._selector).querySelector(".image-popup__text").textContent = text;

        return super.open();
        
    }
}