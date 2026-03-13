export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.closeButton = this.modal.querySelector(".modal-close-button");
    this.#initOpen(buttonId);
    this.#initClose();
  }
  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.handleOverlayClick);
    }
  }
  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener("click", this.handleOverlayClick);
    }
  }
  handleOverlayClick() {
    this.close();
  }
  handleCloseClick() {
    this.close();
  }
  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => this.open());
  }
  #initClose() {
    this.closeButton.addEventListener("click", this.handleCloseClick);
  }
}