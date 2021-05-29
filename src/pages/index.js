import "./index.css";

import {
  validateObject,
  profileEditButton,
  profileAvatarButton,
  profileAddButtonWrapper,
  elementSelector,
  templatesId,
  imagePopupSelector,
  popupProfileSelector,
  popupPlacesSelector,
  popupDeletionSelector,
  popupAvatarSelector,
  usernameSelector,
  himselfSelector,
  avatarSelector,
} from "../scripts/utils/constants.js";
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { Section } from "../scripts/Section.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithDeletion } from "../scripts/PopupWithDeletion.js";
import { Api } from "../scripts/Api.js";

function renderCard(initialCard, templatesId, myCardId) {
  const card = new Card(
    initialCard,
    templatesId,
    myCardId,
    (...args) => {
      popupWithImage.open(...args);
    },
    (cardId, cardObject) => {
      popupWithDeletion.open((cardObject) => {
        api.deliteCard(cardId).then(
          () => {
            cardObject.remove();
            popupWithDeletion.close();
          },
          (err) => {
            console.log(err);
          }
        );
      }, cardObject);
    },
    (cardId, likeElement, groupElement) => {
      api.addLike(cardId).then(
        (list) => {
          likeElement.textContent = list.likes.length;
          groupElement.classList.toggle("element__group_black");
        },
        (err) => {
          console.log(err);
        }
      );
    },
    (cardId, likeElement, groupElement) => {
      api.deliteLike(cardId).then(
        (list) => {
          likeElement.textContent = list.likes.length;
          groupElement.classList.toggle("element__group_black");
        },
        (err) => {
          console.log(err);
        }
      );
    }
  );
  return card.createPlaces();
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-24",
  headers: {
    authorization: "78888a42-fe2c-4a90-b29f-ece4386d0aa4",
    "Content-Type": "application/json",
  },
});

const popupWithDeletion = new PopupWithDeletion(popupDeletionSelector);

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

const userInfo = new UserInfo(
  usernameSelector,
  himselfSelector,
  avatarSelector
);
const section = new Section((initialCard, MyCardId) => {
  return renderCard(initialCard, templatesId, MyCardId);
}, elementSelector);

api.getInitialProfile().then(
  (list) => {
    userInfo.linkUserId(list._id);

    userInfo.setUserInfo(list.name, list.about);
    userInfo.setUserAvatar(list.avatar);

    api.getInitialCards().then(
      (list) => {
        section.renderItems(list, userInfo.getUserInfo()._id);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

const profilePopupWithForm = new PopupWithForm(
  popupProfileSelector,
  (inputData) => {
    api.setProfileData(inputData.firstname, inputData.lastname).then(
      (list) => {
        userInfo.setUserInfo(list.name, list.about);
        profilePopupWithForm.close();
      },
      (err) => {
        console.log(err);
      }
    );
  }
);
profilePopupWithForm.setEventListeners();

profileEditButton.addEventListener("click", () => {
  profilePopupWithForm.insertInputText([
    userInfo.getUserInfo().username,
    userInfo.getUserInfo().himself,
  ]);
  profilePopupWithForm.open();
  popupProfileValidator.removeValidationErrors();
});

const placePopupWithForm = new PopupWithForm(
  popupPlacesSelector,
  (inputData) => {
    api.setNewCard(inputData.firstname, inputData.lastname).then(
      (list) => {
        section.addItem(
          renderCard(list, templatesId, userInfo.getUserInfo()._id)
        );
        placePopupWithForm.close();
      },
      (err) => {
        console.log(err);
      }
    );
  }
);
placePopupWithForm.setEventListeners();

profileAddButtonWrapper.addEventListener("click", () => {
  placePopupWithForm.open();
  popupPlacesValidator.removeValidationErrors();
});

const popupAvatarWithForm = new PopupWithForm(
  popupAvatarSelector,
  (inputData) => {
    api.setAvatar(inputData.firstname).then(
      (list) => {
        userInfo.setUserAvatar(list.avatar);
        popupAvatarWithForm.close();
      },
      (err) => {
        console.log(err);
      }
    );
  }
);
popupAvatarWithForm.setEventListeners();

profileAvatarButton.addEventListener("click", () => {
  popupAvatarWithForm.open();
  popupAvatarValidator.removeValidationErrors();
});

const popupProfileValidator = new FormValidator(
  validateObject,
  popupProfileSelector
);
popupProfileValidator.enableValidation();
const popupPlacesValidator = new FormValidator(
  validateObject,
  popupPlacesSelector
);
popupPlacesValidator.enableValidation();
const popupAvatarValidator = new FormValidator(
  validateObject,
  popupAvatarSelector
);
popupAvatarValidator.enableValidation();
