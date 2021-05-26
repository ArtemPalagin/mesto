export class FormValidator {
    constructor(validateObject, validateElement) {
        this._validateObject = validateObject;
        this._validateElement = validateElement;
        this._formElement = validateElement.querySelector(validateObject.formSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(validateObject.inputSelector));
        this._buttonElement = this._formElement.querySelector(validateObject.submitButtonSelector); 
    }

    _showInputError = (formElement, inputElement, errorMessage) => {

        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.add(this._validateObject.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validateObject.errorClass);
    };

    _hideInputError = (formElement, inputElement) => {

        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._validateObject.inputErrorClass);
        errorElement.classList.remove(this._validateObject.errorClass);
        errorElement.textContent = '';
    };

    _isValid = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {

            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {

            this._hideInputError(formElement, inputElement);
        }
    };

    _hasInvalidInput = (inputList) => {

        return inputList.some((inputElement) => {

            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = (inputList, buttonElement) => {

        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._validateObject.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {

            buttonElement.classList.remove(this._validateObject.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    _setEventListeners(formElement) {

        const inputList = this._inputList

        const buttonElement = this._buttonElement
        this._toggleButtonState(inputList, buttonElement);
        //Тут вы предложили ориентироваться на this._buttonElement и при нажатии на эту кнопку делать её неактивной, но кнопка не будет так обновляться если попап просто закрыли или сделали сабмит, так что я решил перенести это в метод removeValidationErrors

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(formElement, inputElement);

                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    removeValidationErrors(){

        Array.from(this._validateElement.querySelectorAll(this._validateObject.inputSelector)).forEach((element) => {
            element.classList.remove(this._validateObject.inputErrorClass);
        });
        Array.from(this._validateElement.querySelectorAll(this._validateObject.spanSelector)).forEach((element) => {
            element.classList.remove(this._validateObject.errorClass);
        });
        this._buttonElement.classList.add(this._validateObject.inactiveButtonClass);
        this._buttonElement.disabled = true;

    };

    enableValidation() {
        const formElement = this._formElement

        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(formElement);
    };
}