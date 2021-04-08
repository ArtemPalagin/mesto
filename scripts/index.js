let page = document.querySelector(".page");
let profileEditButton = page.querySelector(".profile__edit-button");
let profileAddButtonWrapper = page.querySelector(".profile__add-button-wrapper");

let popupProfile = document.querySelector(".popup_profile");
let popupProfileCloseIcon = popupProfile.querySelector(".popup__close-icon_profile");
let popupProfileUsername = popupProfile.querySelector(".popup__username-profile");
let popupProfileHimself = popupProfile.querySelector(".popup__himself-profile");
let popupProfileContainer = popupProfile.querySelector(".popup__container_profile");

let popupPlaces = document.querySelector(".popup_places");
let popupPlacesCloseIcon = popupPlaces.querySelector(".popup__close-icon_places");
let popupPlacesName = popupPlaces.querySelector(".popup__name-places");
let popupPlacesLink = popupPlaces.querySelector(".popup__link-places");
let popupPlacesContainer = popupPlaces.querySelector(".popup__container_places");

let profileUsername = page.querySelector(".profile__username");
let profileHimself = page.querySelector(".profile__himself");

let elements = page.querySelector(".elements");

let imagePopup = document.querySelector(".image-popup");
let imagePopupImage = document.querySelector(".image-popup__image");
let imagePopupText = document.querySelector(".image-popup__text");
let imagePopupCloseIcon = document.querySelector(".image-popup__close-icon");

let popupClosed = document.querySelector(".popup_closed");

function openedPopupProfile(){
  popupProfileUsername.value = profileUsername.textContent;
  popupProfileHimself.value = profileHimself.textContent;
  popupProfile.classList.remove("popup_closed");
  popupProfile.classList.add("popup_opened");
}

function closePopupProfile(){
  popupProfile.classList.add("popup_animation");
  setTimeout(function(){ //это для плавного закрытия. Как иначе это можно делать не придумал и не понял.
    popupProfile.classList.remove("popup_opened");
    popupProfile.classList.add("popup_closed");
    popupProfile.classList.remove("popup_animation");}, 180);
}

function openedPopupPlaces(){
  popupPlaces.classList.remove("popup_closed");
  popupPlaces.classList.add("popup_opened");
}
function closePopupPlaces(){
  popupPlaces.classList.add("popup_animation");
  setTimeout(function(){
    popupPlaces.classList.remove("popup_opened");
    popupPlaces.classList.add("popup_closed");
    popupPlaces.classList.remove("popup_animation");}, 180);
}

profileEditButton.addEventListener("click", openedPopupProfile);
popupProfileCloseIcon.addEventListener("click", closePopupProfile);

profileAddButtonWrapper.addEventListener("click", openedPopupPlaces);
popupPlacesCloseIcon.addEventListener("click", closePopupPlaces);

function saveProfileData(e){
  e.preventDefault();
  profileUsername.textContent = popupProfileUsername.value;
  profileHimself.textContent = popupProfileHimself.value;

  popupProfile.classList.add("popup_animation");
  setTimeout(function(){
    popupProfile.classList.remove("popup_opened");
    popupProfile.classList.add("popup_closed");
    popupProfile.classList.remove("popup_animation");}, 180);
}
popupProfileContainer.addEventListener("submit", saveProfileData);

function closeImagePopup(){
  imagePopup.classList.add("popup_animation");
  setTimeout(function(){
    imagePopup.classList.remove("popup_opened");
    imagePopup.classList.add("popup_closed");
    imagePopup.classList.remove("popup_animation");}, 180);
}

imagePopupCloseIcon.addEventListener('click', closeImagePopup);

function createPlaces(link,name){
    const element = document.createElement("div");
    element.classList.add("element");

    const elementImage = document.createElement("button");
    elementImage.classList.add("element__image");
    let imgurl = `url(${link})`;
    elementImage.srclink = link;
    elementImage.style.backgroundImage = imgurl;
    elementImage.alt = "Не получислось загрузить фотографию места";
    elementImage.type = "button";

    const delelteButton = document.createElement("button");
    delelteButton.classList.add("element__delete-button");
    delelteButton.type = "button";

    const binTop = document.createElement("img");
    binTop.classList.add("element__bin_top");
    binTop.src = "images/bin-top.svg";
    binTop.alt = "Удалить";

    const binBottom = document.createElement("img");
    binBottom.classList.add("element__bin_bottom");
    binBottom.src = "images/bin-bottom.svg";

    const elementWrapper = document.createElement("div");
    elementWrapper.classList.add("element__wrapper");

    const elementText = document.createElement("h3");
    elementText.classList.add("element__text");
    elementText.textContent = name;

    const elementGroup = document.createElement("button");
    elementGroup.classList.add("element__group");
    elementGroup.type = "button";

    elements.prepend(element);
    element.prepend(elementImage,elementWrapper);
    elementImage.prepend(delelteButton);
    delelteButton.prepend(binTop,binBottom);
    elementWrapper.prepend(elementText,elementGroup);

    elementGroup.addEventListener('click', function (e) {
      if(e.target.classList.contains("element__group_black")){
        e.target.classList.remove("element__group_black");
      } else{
        e.target.classList.add("element__group_black");
      }
    });

    delelteButton.addEventListener('click', function (e) {
      e.target.parentElement.parentElement.parentElement.remove();
    });

    elementImage.addEventListener('click', function (e) {
      imagePopupImage.src = e.target.srclink;
      imagePopupText.textContent = e.target.nextSibling.firstChild.textContent;
      imagePopup.classList.remove("popup_closed");
      imagePopup.classList.add("popup_opened");
      
    });
}


function savePlacesData(e){
    e.preventDefault();
    createPlaces(popupPlacesLink.value,popupPlacesName.value);

    popupPlacesLink.value = "";
    popupPlacesName.value = "";

    popupPlaces.classList.add("popup_animation");
    setTimeout(function(){
      popupPlaces.classList.remove("popup_opened");
      popupPlaces.classList.add("popup_closed");
      popupPlaces.classList.remove("popup_animation");}, 180);
}
popupPlacesContainer.addEventListener("submit", savePlacesData);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
initialCards.forEach(function (item) {
  createPlaces(item.link,item.name);
});

