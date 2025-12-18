import { products } from "./products.js";

const createProductTemplate = (product) => {
  const compositionItems = product.composition
    .map((item) => `<li class="composition-item">${item}</li>`)
    .join("");

  return `
        <div class="card-container">
          <img src="${product.img}" alt="${product.title}" width="290" height="245" />
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.title}</h3>
          <p class="product-description">${product.description}</p>
          <span class="composition-title">Состав:</span>
          <ul class="product-composition-list">${compositionItems}</ul>
          <div class="product-price-container">
          <span class="price-label">Цена</span>
          <span class="price-value">${product.price} &#x20BD;</span>
          </div>
        </div>
    `;
};

const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);

console.log("Массив:", productDescriptions);

const getCardsCount = () => {
  let count;
  while (true) {
    const input = prompt("От 1 до 5");
    if (input === null) return 0;
    count = parseInt(input);
    if (!isNaN(count) && count >= 1 && count <= 5) {
      return count;
    }
    alert("Ошибка");
  }
};

const renderCards = (cardsArray, count) => {
  const container = document.querySelector(".cards-container-box");
  if (!container) return;
  const cardsHTML = cardsArray
    .slice(0, count)
    .map((product) => createProductTemplate(product))
    .join("");

  container.innerHTML = cardsHTML;
};

const countToDisplay = getCardsCount();

if (countToDisplay > 0) {
  renderCards(products, countToDisplay);
}
