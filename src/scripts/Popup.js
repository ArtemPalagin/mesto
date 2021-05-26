export class Popup{
    constructor(selector){
        this._selector = selector;
    }
    _handleEscClose = (evt) => {
        const escKeyCode = 27;
        if (evt.keyCode === escKeyCode){
            this.close();
        }
    }
    open(){
        document.querySelector(this._selector).classList.remove("popup_closed");
        document.querySelector(this._selector).classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close(){
        document.querySelector(this._selector).classList.remove("popup_opened");
        document.querySelector(this._selector).classList.add("popup_closed");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    setEventListeners(){

        document.querySelector(this._selector).querySelector(".popup__icon").addEventListener("click", () => {
          this.close();
        });
    }
}