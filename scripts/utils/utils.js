export function closeModal(modal) {
    modal.classList.remove("popup_opened");
    modal.classList.add("popup_closed");
    document.removeEventListener("keydown", closeWithESC);
  }
export function closeWithESC(evt){
    const escKeyCode = 27;
    if (evt.keyCode === escKeyCode){
      closeModal(document.querySelector(".popup_opened"));
    }
  }
export function openModal(modal) {
    modal.classList.remove("popup_closed");
    modal.classList.add("popup_opened");
    document.addEventListener("keydown", closeWithESC);
  }