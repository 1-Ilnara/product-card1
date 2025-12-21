import { products } from "./products.js";

const createProductTemplate = ({
  img,
  title,
  category,
  description,
  composition,
  price,
}) => {
  const list = composition.map((item) => `<li>${item}</li>`).join("");

  return `
    <div class="card-container">
      <img src="images/${img}" alt="${title}" width="290" height="245" />
      <span class="product-category">${category}</span>
      <h3 class="product-name">${title}</h3>
      <p class="product-description">${description}</p>
      <span class="composition-title">Состав:</span>
      <ul class="product-composition-list">${list}</ul>
      <div class="product-price-container">
        <span class="price-label">Цена</span>
        <span class="price-value">${price.toLocaleString()} &#x20BD;</span>
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
  const count = parseInt(prompt("Сколько карточек отрисовать? (От 1 до 5)"));
  return count >= 1 && count <= 5 ? count : (alert("Ошибка ввода"), 0);
};

const countToDisplay = getCardsCount();
if (countToDisplay > 0) {
  renderCards(products, countToDisplay);
}

const productDescriptions = products.map((p) => ({ [p.title]: p.description }));
console.log("Описания:", productDescriptions);
