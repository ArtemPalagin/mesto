import {Popup} from "./Popup.js";
export class PopupWithForm extends Popup{
    constructor(selector, onSubmit){
        super(selector);
        this._onSubmit = onSubmit;
    }
    _getInputValues(){
        const formData = new FormData(this._popup.querySelector(".popup__form"));

        const inputData = {};

        for (let [name, value] of formData) {
            inputData[name] = value;
        }

        return inputData;
    }
    setEventListeners(){

        this._popup.querySelector(".popup__form").addEventListener("submit", (e) => {
            e.preventDefault()
            this._onSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
    close(){
        this._popup.querySelector(".popup__form").reset();
        super.close();
    }
    // решил сделать отдельный метод в классе для заполнения инпутов. Показалось, что так правильней
    insertInputText(textArray){
        const inputsArray = Array.from(this._popup.querySelectorAll(".popup__entry"));
        for(let i = 0; i < textArray.length; i++){
            inputsArray[i].value = textArray[i];
        }
    }
}