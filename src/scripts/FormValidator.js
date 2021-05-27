export class FormValidator {
    constructor(validateObject, validateElement) {
        this._validateObject = validateObject;
        this._validateElement = validateElement;
        this._formElement = validateElement.querySelector(validateObject.formSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(validateObject.inputSelector));
        this._buttonElement = this._formElement.querySelector(validateObject.submitButtonSelector); 
    }

    _showInputError = (inputElement, errorMessage) => {

        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.add(this._validateObject.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validateObject.errorClass);
    };

    _hideInputError = (inputElement) => {

        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._validateObject.inputErrorClass);
        errorElement.classList.remove(this._validateObject.errorClass);
        errorElement.textContent = '';
    };

    _isValid = (inputElement) => {
        if (!inputElement.validity.valid) {

            this._showInputError(inputElement, inputElement.validationMessage);
        } else {

            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput = () => {

        return this._inputList.some((inputElement) => {

            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = () => {

        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._validateObject.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {

            this._buttonElement.classList.remove(this._validateObject.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);

                this._toggleButtonState();
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

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    };
}