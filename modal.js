export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector('.close-btn');
    
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
    this.closeBtn.addEventListener('click', () => this.close());
  }
}
