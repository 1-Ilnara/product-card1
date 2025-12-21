import { products } from "./products.js";

const createProductTemplate = (product) => {
  return ` 
    <div class="card-container"> 
      <img src="images/${product.img}.png" alt="${product.title}" width="290" height="245" /> 
      <span class="product-category">${product.category}</span> 
      <h3 class="product-name">${product.title}</h3> 
      <p class="product-description">${product.description}</p> 
      <span class="composition-title">Составить:</span> 
      <ul class="product-composition-list"> 
      ${product.composition.map((item) => `<li>${item}</li>`).join("")} 
      </ul> 
      <div class="product-price-container"> 
        <span class="price-label">Цена</span> 
        <span class="price-value">${product.price.toLocaleString()} ₽</span> 
      </div> 
    </div> 
  `;
};

const renderCards = (cardsArray, count) => {
  const container = document.querySelector(".cards-container-box");
  if (!container) return;

  container.innerHTML = cardsArray
    .slice(0, count)
    .map(createProductTemplate)
    .join("");
};

const getCardsCount = () => {
  const input = prompt("Сколько карточек отрисовать? (От 1 до 5)");
  const count = parseInt(input);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка ввода. Введите число от 1 до 5");
    return 0;
  }
  return count;
};

const countToDisplay = getCardsCount();
if (countToDisplay > 0) {
  renderCards(products, countToDisplay);
}

const productDescriptions = products.map((p) => ({ [p.title]: p.description }));
console.log("Описания продуктов:", productDescriptions);
