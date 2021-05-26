import './index.css';

import {
    validateObject, profileEditButton, popupProfile, popupPlaces, profileAddButtonWrapper, initialCards,
    elementSelector, templateId, imagePopupSelector, popupProfileSelector, popupPlacesSelector,
    usernameSelector, himselfSelector
} from "../scripts/utils/constants.js";
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { Section } from "../scripts/Section.js";
import { UserInfo } from "../scripts/UserInfo.js";

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

const profilePopupWithForm = new PopupWithForm(popupProfileSelector, (inputData) => {
    userInfo.setUserInfo(inputData.firstname, inputData.lastname);
});
profilePopupWithForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
    profilePopupWithForm.open();
    popupProfileValidator.removeValidationErrors();
});

const placePopupWithForm = new PopupWithForm(popupPlacesSelector, (inputData) => {
    section.addItem(renderCard({link: inputData.lastname, name: inputData.firstname}));
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
