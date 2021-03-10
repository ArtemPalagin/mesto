let page = document.querySelector(".page");
let profileEditButton = page.querySelector(".profile__edit-button")
let popup = document.querySelector(".popup");
let popupCloseIcon = popup.querySelector(".popup__close-icon");
let popupUsername = popup.querySelector(".popup__entry_username");
let popupHimself = popup.querySelector(".popup__entry_himself");
let popupButton = popup.querySelector(".popup__button");
let popupContainer = popup.querySelector(".popup__container");
let profileUsername = page.querySelector(".profile__username");
let profileHimself = page.querySelector(".profile__himself");

popupUsername.value = "Жак-Ив Кусто";
popupHimself.value = "Исследователь океана";

function popupOpened(){
    popupUsername.value = profileUsername.textContent;
    popupHimself.value = profileHimself.textContent;
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
popupContainer.addEventListener("submit", saveData);
