export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileAddButtonWrapper = document.querySelector(".profile__add-button-wrapper");
export const popupProfile = document.querySelector(".popup_profile");
export const popupPlaces = document.querySelector(".popup_places");
export const validateObject = {  
  formSelector: '.popup__form',
  inputSelector: '.popup__entry',
  spanSelector: '.popup__span',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'};

export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
export const elementSelector = ".elements";

export const templateId = "#card-template";

export const imagePopupSelector = ".image-popup";

export const popupProfileSelector = ".popup_profile";
export const popupPlacesSelector = ".popup_places";

export const usernameSelector = ".profile__username";
export const himselfSelector = ".profile__himself";

export const ESC_KEY_CODE = 27;
