import PRODUCTS from '../../data/products';

class ProductItem {
  render() {
    let htmlCatalog = '';

    PRODUCTS.forEach(({ id, thumbnail, title, price, stock }) => {
      htmlCatalog += `
       <li class="catalog__item">
        <article class="product product_row" id="${id}">
          <div class="product__photo">
            <div class="product__photo-main">
              <img src="${thumbnail}" alt="Product image"
                class="product__img">
            </div>
          </div>
          <div class="product__content">
            <div class="product__info">
              <h3 class="product__name">${title}</h3>
              <div class="product__price">${price} ₽
              </div>
            </div>
            <div class="product__stock">В наличии:
                <span class="product__stock-value">${stock}</span>
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
        </div>
       </article>
     </li>
    `;
    });

    return htmlCatalog;
  }
}

export default ProductItem;
