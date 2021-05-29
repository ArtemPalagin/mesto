import {ESC_KEY_CODE} from "./utils/constants.js";
export class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
    }
    _handleEscClose = (evt) => { 
        if (evt.keyCode === ESC_KEY_CODE){
            this.close();
        }
    }
    open(){
        this._popup.classList.remove("popup_closed");
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close(){
        this._popup.classList.remove("popup_opened");
        this._popup.classList.add("popup_closed");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    setEventListeners(){
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close(evt.target);
            }
          });
        this._popup.querySelector(".popup__icon").addEventListener("click", () => {
          this.close();
        });
    }
}