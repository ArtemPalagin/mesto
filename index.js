let page = document.querySelector(".page");
let group1 = document.getElementById("group1");
let group2 = document.getElementById("group2");
let group3 = document.getElementById("group3");
let group4 = document.getElementById("group4");
let group5 = document.getElementById("group5");
let group6 = document.getElementById("group6");
let profileEditButton = page.querySelector(".profile__edit-button")
let popup = document.querySelector(".popup");
let popupCloseIcon = popup.querySelector(".popup__close-icon");
let popupUsername = popup.querySelector(".popup__username");
let popupHimself = popup.querySelector(".popup__himself");
let popupButton = popup.querySelector(".popup__button");
let profileUsername = page.querySelector(".profile__username");
let profileHimself = page.querySelector(".profile__himself");

function popupOpened(){
    popup.classList.add("popup_opened");
}
function popupClose(){
    popup.classList.remove("popup_opened");
}
profileEditButton.addEventListener("click", popupOpened);
popupCloseIcon.addEventListener("click", popupClose);
function saveData(){
    profileUsername.textContent = popupUsername.value;
    profileHimself.textContent = popupHimself.value;
    popup.classList.remove("popup_opened");
}
popupButton.addEventListener("click", saveData);