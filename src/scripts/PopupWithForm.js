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
        return super.setEventListeners();
        // Вы написали что ретерн тут не нужен, но выражение return super.setEventListeners(); наследует весь метод setEventListeners, что был прописан у родителя этого класса, без этого ретерна попап не будет закрываться
    }
    close(){
        this._popup.querySelector(".popup__form").reset();
        return super.close();
    }
}