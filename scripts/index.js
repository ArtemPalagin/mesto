const page = document.querySelector(".page");
const profileEditButton = page.querySelector(".profile__edit-button");
const profileAddButtonWrapper = page.querySelector(
  ".profile__add-button-wrapper"
);

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
const popupProfileContainer = popupProfile.querySelector(
  ".popup__container_profile"
);

const popupPlaces = document.querySelector(".popup_places");
const popupPlacesCloseIcon = popupPlaces.querySelector(
  ".popup__close-icon_places"
);
const popupPlacesName = popupPlaces.querySelector(".popup__name-places");
const popupPlacesLink = popupPlaces.querySelector(".popup__link-places");
const popupPlacesContainer = popupPlaces.querySelector(
  ".popup__container_places"
);

const profileUsername = page.querySelector(".profile__username");
const profileHimself = page.querySelector(".profile__himself");

const elements = page.querySelector(".elements");

const imagePopup = document.querySelector(".image-popup");
const imagePopupImage = document.querySelector(".image-popup__image");
const imagePopupText = document.querySelector(".image-popup__text");
const imagePopupCloseIcon = document.querySelector(".image-popup__close-icon");

const popupClosed = document.querySelector(".popup_closed");

const cardTemplate = document.querySelector("#card-template").content;

function openModal(modal) {
  modal.classList.remove("popup_closed");
  modal.classList.add("popup_opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_opened");
  modal.classList.add("popup_closed");
}

profileEditButton.addEventListener("click", function () {
  popupProfileUsername.value = profileUsername.textContent;
  popupProfileHimself.value = profileHimself.textContent;
  openModal(popupProfile);
});
popupProfileCloseIcon.addEventListener("click", function () {
  closeModal(popupProfile);
});

profileAddButtonWrapper.addEventListener("click", function () {
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

function createPlaces(link, name) {
  const cardTemplateClone = cardTemplate.cloneNode(true);
  const imgurl = `url(${link})`;
  const elementImage = cardTemplateClone.querySelector(".element__image");
  elementImage.style.backgroundImage = imgurl;
  cardTemplateClone.querySelector(".element__text").textContent = name;

  const delelteButton = cardTemplateClone.querySelector(
    ".element__delete-button"
  );
  const elementGroup = cardTemplateClone.querySelector(".element__group");

  elementGroup.addEventListener("click", function (e) {
    if (e.target.classList.contains("element__group_black")) {
      e.target.classList.remove("element__group_black");
    } else {
      e.target.classList.add("element__group_black");
    }
  });

  delelteButton.addEventListener("click", function (e) {
    e.target.closest(".element").remove();
  });

  elementImage.addEventListener("click", function (e) {
    imagePopupImage.src = link;
    imagePopupText.textContent = name;
    imagePopup.classList.remove("popup_closed");
    imagePopup.classList.add("popup_opened");
  });

  return cardTemplateClone;
}
function renderPlaces(link, name) {
  elements.prepend(createPlaces(link, name));
}

function savePlacesData(e) {
  e.preventDefault();
  renderPlaces(popupPlacesLink.value, popupPlacesName.value);

  popupPlacesLink.value = "";
  popupPlacesName.value = "";

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
  renderPlaces(item.link, item.name);
});
