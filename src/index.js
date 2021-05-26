import './pages/index.css';

import {
    validateObject, profileEditButton, popupProfile, popupPlaces, profileAddButtonWrapper, initialCards,
    elementSelector, templateId, imagePopupSelector, popupProfileSelector, popupPlacesSelector,
    usernameSelector, himselfSelector
} from "./scripts/utils/constants.js";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { Section } from "./scripts/Section.js";
import { UserInfo } from "./scripts/UserInfo.js";

function renderCard(initialCard) {
    const card = new Card(initialCard.link, initialCard.name, templateId, (...args) => {
        popupWithImage.open(...args);
    });
    return card.createPlaces();
}

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

const section = new Section({
    items: initialCards,
    renderer: renderCard,
}, elementSelector);
section.renderItems();

const userInfo = new UserInfo(usernameSelector, himselfSelector);

const profilePopupWithForm = new PopupWithForm(popupProfileSelector, (...args) => {
    userInfo.setUserInfo(...args);
});
profilePopupWithForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
    profilePopupWithForm.open();
    popupProfileValidator.removeValidationErrors();
});

const placePopupWithForm = new PopupWithForm(popupPlacesSelector, (name, link) => {
    const section = new Section({
        items: [{ name, link }],
        renderer: renderCard,
    }, elementSelector);
    section.renderItems();
});
placePopupWithForm.setEventListeners();

profileAddButtonWrapper.addEventListener("click", () => {
    placePopupWithForm.open();
    popupPlacesValidator.removeValidationErrors();
});

const popupProfileValidator = new FormValidator(validateObject, popupProfile);
popupProfileValidator.enableValidation();
const popupPlacesValidator = new FormValidator(validateObject, popupPlaces);
popupPlacesValidator.enableValidation();



    // profileEditButton.addEventListener("click", function () {
    //   popupProfileUsername.value = profileUsername.textContent;
    //   popupProfileHimself.value = profileHimself.textContent;
    //   popupProfileValidator.removeValidationErrors();

    //   openModal(popupProfile);
    // });
    // popupProfileCloseIcon.addEventListener("click", function () {
    //   closeModal(popupProfile);
    // });

    // profileAddButtonWrapper.addEventListener("click", function () {
    //   popupPlacesLink.value = "";
    //   popupPlacesName.value = "";
    //   popupProfileValidator.removeValidationErrors();

    //   openModal(popupPlaces);
    // });
    // popupPlacesCloseIcon.addEventListener("click", function () {
    //   closeModal(popupPlaces);
    // });

    // function saveProfileData(e) {
    //   e.preventDefault();
    //   profileUsername.textContent = popupProfileUsername.value;
    //   profileHimself.textContent = popupProfileHimself.value;

    //   closeModal(popupProfile);
    // }
    // popupProfileContainer.addEventListener("submit", saveProfileData);

    // imagePopupCloseIcon.addEventListener("click", function () {
    //   closeModal(imagePopup);
    // });

    // function createCard(link, name, selector) {
    // //   const card = new Card(link, name, selector);
    // //   const cardElement = card.createPlaces();

    // //   elements.prepend(cardElement);
    // }

    // function savePlacesData(e) {
    //   e.preventDefault();
    //   createCard(popupPlacesLink.value, popupPlacesName.value, templateId);



    //   closeModal(popupPlaces);
    // }

    // popupPlacesContainer.addEventListener("submit", savePlacesData);



    // initialCards.forEach(function (item) {
    //   createCard(item.link, item.name, templateId);
    // });

    // const popup = Array.from(document.querySelectorAll('.popup'));
    // popup.forEach((popupElement) => {
    //   popupElement.addEventListener('click', function (evt) {
    //     if (evt.target.classList.contains('popup')) {
    //       closeModal(evt.target);
    //     }
    //   });

    // })

