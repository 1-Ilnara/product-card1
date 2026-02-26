export class Form {
  constructor(id, onSubmitCallback) {
    this.form = document.getElementById(id);
    this.onSubmitCallback = onSubmitCallback;
    this.handleFormSubmit = this.handleSubmit.bind(this);
    this.init();
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.onSubmitCallback) {
      this.onSubmitCallback(e);
    }
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', this.handleFormSubmit);
    }
  }

  destroy() {
    if (this.form) {
      this.form.removeEventListener('submit', this.handleFormSubmit);
    }
  }
}