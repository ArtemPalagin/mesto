import {Popup} from "./Popup.js";
export class PopupWithForm extends Popup{
    constructor(selector, onSubmit){
        super(selector);
        this._onSubmit = onSubmit;
    }
    _getInputValues(){
        let formData = new FormData(document.querySelector(this._selector).querySelector(".popup__form"));

        let inputData = {};

        for (let [name, value] of formData) {
            inputData[name] = value;
        }

        return inputData;
    }
    setEventListeners(){

        document.querySelector(this._selector).querySelector(".popup__form").addEventListener("submit", (e) => {
            e.preventDefault()
            this._onSubmit(this._getInputValues().firstname, this._getInputValues().lastname );
            this.close();
        });
        return super.setEventListeners();
    }
    close(){
        document.querySelector(this._selector).querySelector(".popup__form").reset();
        return super.close();
    }
}