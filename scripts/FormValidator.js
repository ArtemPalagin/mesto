import {profileEditButton, profileAddButtonWrapper, usernameInputError, popupProfileUsername, himselfInputError, popupProfileHimself,
nameInputError, popupPlacesName, linkInputError, popupPlacesLink } from "./utils/constants.js";

export class FormValidator {
    constructor(validateObject, validateElement) {
        this._validateObject = validateObject;
        this._validateElement = validateElement;
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

        if (this._hasInvalidInput(inputList) || buttonElement.wasSaved == true) {
            buttonElement.wasSaved = false;
            buttonElement.classList.add(this._validateObject.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {

            buttonElement.classList.remove(this._validateObject.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    _setEventListeners(formElement) {

        const inputList = Array.from(formElement.querySelectorAll(this._validateObject.inputSelector));

        const buttonElement = formElement.querySelector(this._validateObject.submitButtonSelector);
        buttonElement.wasSaved = false;
        this._toggleButtonState(inputList, buttonElement);

        
        profileEditButton.addEventListener('click', () => {
            buttonElement.wasSaved = true;
            this._toggleButtonState(inputList, buttonElement);
        });
        profileAddButtonWrapper.addEventListener('click', () => {
            buttonElement.wasSaved = true;
            this._toggleButtonState(inputList, buttonElement);
        });

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(formElement, inputElement);

                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    removeValidationErrors(){
        usernameInputError.classList.remove(this._validateObject.errorClass);
        popupProfileUsername.classList.remove(this._validateObject.inputErrorClass);
        himselfInputError.classList.remove(this._validateObject.errorClass);
        popupProfileHimself.classList.remove(this._validateObject.inputErrorClass);

        nameInputError.classList.remove(this._validateObject.errorClass);
        popupPlacesName.classList.remove(this._validateObject.inputErrorClass);
        linkInputError.classList.remove(this._validateObject.errorClass);
        popupPlacesLink.classList.remove(this._validateObject.inputErrorClass);
    };

    enableValidation() {
        const formElement = this._validateElement.querySelector(this._validateObject.formSelector);

        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(formElement);
    };
}