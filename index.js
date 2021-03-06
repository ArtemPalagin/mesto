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

group1.bool = 1;
group2.bool = 1;
group3.bool = 1;
group4.bool = 1;
group5.bool = 1;
group6.bool = 1;
function blacken1(){
    if (group1.bool === 1){
        group1.src = "images/group-black.svg";
        group1.bool = 0;
    } else{
        group1.src = "images/group.svg";
        group1.bool = 1;
    }
}
function blacken2(){
    if (group2.bool === 1){
        group2.src = "images/group-black.svg";
        group2.bool = 0;
    } else{
        group2.src = "images/group.svg";
        group2.bool = 1;
    }
}function blacken3(){
    if (group3.bool === 1){
        group3.src = "images/group-black.svg";
        group3.bool = 0;
    } else{
        group3.src = "images/group.svg";
        group3.bool = 1;
    }
}function blacken4(){
    if (group4.bool === 1){
        group4.src = "images/group-black.svg";
        group4.bool = 0;
    } else{
        group4.src = "images/group.svg";
        group4.bool = 1;
    }
}function blacken5(){
    if (group5.bool === 1){
        group5.src = "images/group-black.svg";
        group5.bool = 0;
    } else{
        group5.src = "images/group.svg";
        group5.bool = 1;
    }
}function blacken6(){
    if (group6.bool === 1){
        group6.src = "images/group-black.svg";
        group6.bool = 0;
    } else{
        group6.src = "images/group.svg";
        group6.bool = 1;
    }
}
group1.addEventListener("click", blacken1);
group2.addEventListener("click", blacken2);
group3.addEventListener("click", blacken3);
group4.addEventListener("click", blacken4);
group5.addEventListener("click", blacken5);
group6.addEventListener("click", blacken6);
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