export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector('.close-btn');
    this.handleCloseClick = this.close.bind(this);
    this.init();
  }

  open() {
    this.modal.style.display = 'block';
  }

  close() {
    this.modal.style.display = 'none';
  }

  isOpen() {
    return this.modal.style.display === 'block';
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this.handleCloseClick);
    }
  }

  destroy() {
    if (this.closeBtn) {
      this.closeBtn.removeEventListener('click', this.handleCloseClick);
    }
  }
}