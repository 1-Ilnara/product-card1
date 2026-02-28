export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector(".close-btn");
    this.handleCloseClick = this.close.bind(this);
  }
  open() {
    this.modal.style.display = "block";
    this.init();    
  }
  close() {
    this.modal.style.display = "none";
    this.destroy();  
  }
  isOpen() {
    return this.modal.style.display === "block";
  }
  init() {
    this.closeBtn?.addEventListener("click", this.handleCloseClick);
  }
  destroy() {
    this.closeBtn?.removeEventListener("click", this.handleCloseClick);
  }
}



