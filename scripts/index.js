import {  imagePopup, validateObject, profileEditButton, profileAddButtonWrapper } from "./utils/constants.js";
import { closeModal, openModal } from "./utils/utils.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const page = document.querySelector(".page");


const popupProfile = document.querySelector(".popup_profile");
const popupProfileCloseIcon = popupProfile.querySelector(
  ".popup__close-icon_profile"
);
const popupProfileUsername = popupProfile.querySelector(
  ".popup__username-profile"
);
const popupProfileHimself = popupProfile.querySelector(
  ".popup__himself-profile"
);
//000000000000000000
const popupProfileContainer = popupProfile.querySelector(
  ".popup__container_profile"
);
const usernameInputError = popupProfile.querySelector(".username-input-error");
const himselfInputError = popupProfile.querySelector(".himself-input-error");

const popupPlaces = document.querySelector(".popup_places");
const popupPlacesCloseIcon = popupPlaces.querySelector(
  ".popup__close-icon_places"
);
const popupPlacesName = popupPlaces.querySelector(".popup__name-places");
const popupPlacesLink = popupPlaces.querySelector(".popup__link-places");
const popupPlacesContainer = popupPlaces.querySelector(
  ".popup__container_places"
);
const nameInputError = popupPlaces.querySelector(".name-input-error");
const linkInputError = popupPlaces.querySelector(".link-input-error");

const profileUsername = page.querySelector(".profile__username");
const profileHimself = page.querySelector(".profile__himself");

const elements = page.querySelector(".elements");

const imagePopupCloseIcon = document.querySelector(".image-popup__close-icon");


const templateId = "#card-template";



// 1111111111111111111
profileEditButton.addEventListener("click", function () {
  popupProfileUsername.value = profileUsername.textContent;
  popupProfileHimself.value = profileHimself.textContent;

  usernameInputError.classList.remove(validateObject.errorClass);
  popupProfileUsername.classList.remove(validateObject.inputErrorClass);
  himselfInputError.classList.remove(validateObject.errorClass);
  popupProfileHimself.classList.remove(validateObject.inputErrorClass);


  openModal(popupProfile);
});
popupProfileCloseIcon.addEventListener("click", function () {
  closeModal(popupProfile);
});
// 2222222222222222
profileAddButtonWrapper.addEventListener("click", function () {
  popupPlacesLink.value = "";
  popupPlacesName.value = "";

    nameInputError.classList.remove(validateObject.errorClass);
    popupPlacesName.classList.remove(validateObject.inputErrorClass);
    linkInputError.classList.remove(validateObject.errorClass);
    popupPlacesLink.classList.remove(validateObject.inputErrorClass);

  openModal(popupPlaces);
});
popupPlacesCloseIcon.addEventListener("click", function () {
  closeModal(popupPlaces);
});

function saveProfileData(e) {
  e.preventDefault();
  profileUsername.textContent = popupProfileUsername.value;
  profileHimself.textContent = popupProfileHimself.value;

  closeModal(popupProfile);
}
popupProfileContainer.addEventListener("submit", saveProfileData);

imagePopupCloseIcon.addEventListener("click", function () {
  closeModal(imagePopup);
});

function createCard(link, name, selector) {
  const card = new Card(link, name, selector);
  const cardElement = card.createPlaces();

  elements.prepend(cardElement);
}

function savePlacesData(e) {
  e.preventDefault();
  createCard(popupPlacesLink.value, popupPlacesName.value, templateId);



  closeModal(popupPlaces);
}

popupPlacesContainer.addEventListener("submit", savePlacesData);

const initialCards = [
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

initialCards.forEach(function (item) {
  createCard(item.link, item.name, templateId);
});

const popup = Array.from(document.querySelectorAll('.popup'));
popup.forEach((popupElement) => {
  popupElement.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      closeModal(evt.target);
    }
  });

})



const popupProfileValidator = new FormValidator(validateObject, popupProfile);
popupProfileValidator.enableValidation();
const popupPlacesValidator = new FormValidator(validateObject, popupPlaces);
popupPlacesValidator.enableValidation();