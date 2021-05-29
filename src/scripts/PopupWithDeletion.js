import {Popup} from "./Popup.js";
export class PopupWithDeletion extends Popup{
    constructor(selector){
        super(selector);
    }
    setEventListeners(deliteFunction, cardObject){
        this._popup.querySelector(".popup__form").addEventListener("submit", (e) => {
            e.preventDefault()
            // debugger
            deliteFunction(cardObject);
        });
        super.setEventListeners();
    }
    open(deliteFunction, cardObject){
        this.setEventListeners(deliteFunction, cardObject);
        super.open();
    }

}
