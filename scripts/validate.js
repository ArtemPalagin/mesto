const validateObject = {  
formSelector: '.popup__form',
inputSelector: '.popup__entry',
submitButtonSelector: '.popup__button',
inactiveButtonClass: 'popup__button_inactive',
inputErrorClass: 'popup__input_type_error',
errorClass: 'popup__input-error_active'};

const showInputError = (formElement, inputElement, errorMessage) => {

    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.add(validateObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateObject.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
  
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.remove(validateObject.inputErrorClass);
    errorElement.classList.remove(validateObject.errorClass);
    errorElement.textContent = '';
  };
  
  
  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
  
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
  
      hideInputError(formElement, inputElement);
    }
  };
  
  
  
  
  
  const hasInvalidInput = (inputList) => {
  
    return inputList.some((inputElement) => {
  
  
      return !inputElement.validity.valid;
    })
  };
  
  
  
  const toggleButtonState = (inputList, buttonElement) => {
  
    if (hasInvalidInput(inputList)) {
  
      buttonElement.classList.add(validateObject.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
  
      buttonElement.classList.remove(validateObject.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };
  
  const setEventListeners = (formElement) => {
  
    const inputList = Array.from(formElement.querySelectorAll(validateObject.inputSelector));
  
    const buttonElement = formElement.querySelector(validateObject.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
  
  
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
  
    const formList = Array.from(document.querySelectorAll(validateObject.formSelector));
  
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
  
        evt.preventDefault();
      });
  
  
      setEventListeners(formElement);
    });
  };
  
  
  enableValidation();