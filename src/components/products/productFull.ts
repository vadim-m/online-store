class ProductFull {
  render() {
    return `
    <article class="product" id="3">
            <div class="product__photo">
              <div class="product__photo-main">
                <img src="https://raw.githubusercontent.com/vadim-m/api-fake/img/3/1.webp" alt="Product image"
                  class="product__img">
                <span class="product__top">Top</span>
              </div>
              <ul class="product__thumbnails">
                <li class="product__thumbnail active">
                  <button class="product__thumbnail-pic"></button>
                </li>
                <li class="product__thumbnail">
                  <button class="product__thumbnail-pic"></button>
                </li>
                <li class="product__thumbnail">
                  <button class="product__thumbnail-pic"></button>
                </li>
              </ul>
            </div>
            <div class="product__content">
              <div class="product__info">
                <h3 class="product__name">Набор столовых приборов PVD-покрытие 24 предмета</h3>
                <div class="product__price active">55000 ₽
                  <span class="product__discount-price">50000 ₽</span>
                </div>
              </div>
              <div class="product__full-info">
                <h4 class="product__description">Описание товара:</h4>
                <p class="product__text">Столовые приборы с уникальным PVD-покрытием. Именно это покрытие позволяет
                  создавать необычные актуальные оттенки приборов — медный, золотой и чёрный цвет.
                </p>
                <div class="product__stock">В наличии:
                  <span class="product__stock-value">15</span>
                </div>
                <div class="product__category">Категория:
                  <span class="product__category-value">Набор приборов</span>
                </div>
                <div class="product__color">Цвет:
                  <span class="product__color-value">Золото</span>
                </div>
                <div class="product__material">Материал:
                  <span class="product__material-value">Латунь</span>
                </div>
              </div>
              <div class="product__buttons">
                <div class="product__count">
                  <button class="product__count_minus">-</button>
                  <span class="product__count_amount">1</span>
                  <button class="product__count_plus">+</button>
                </div>
                <button class="product__button product__button_cart">
                  Добавить в корзину
                </button>
                <button class="product__button product__button_click">
                  Купить в один клик
                </button>
              </div>
            </div>
          </article>
    `;
  }
}

export default ProductFull;
