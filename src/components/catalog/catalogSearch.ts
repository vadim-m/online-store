import Component from '../component';
import { getParamsSpecificValue } from '../../helpers/hash';

class CatalogSearch extends Component {
  private searchInputValue: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.searchInputValue = this.getSearchInputValue() ?? '';
  }

  getSearchInputValue() {
    const value = getParamsSpecificValue('search');

    if (value) {
      return value[0].toLocaleUpperCase() + value.slice(1);
    }

    return null;
  }

  setFoundProductsAmount() {
    let amount: string;
    const products = this.container.querySelectorAll('.product');
    if (products.length === 1 && products[0].id === '0') {
      amount = '0';
    } else {
      amount = `${products.length}`;
    }
    const amountEl = <HTMLFormElement>this.container.querySelector('.search__result-amount');
    amountEl.textContent = amount;
  }

  getElementTemplate() {
    const htmlTemplate = `
      <div class="search">
        <input 
          class="search__input" 
          type="search" 
          title="Для поиска необходимо нажать 'Enter' либо кнопку 'Поиск'"
          placeholder="Какой товар Вас интересует?"
          autocomplete="off" 
          value="${this.searchInputValue}"
        />
        <input
          class="search__input search__input-find" 
          type="button" 
          value="Поиск"
        />
        <input 
          class="search__input search__input-reset" 
          type="button" 
          value="Очистить"
        />
        <div class="search__result">
          <span class="search__result-text">Товаров найдено:&nbsp;</span>
          <span class="search__result-amount">0</span>
        </div>
      </div">
    `;

    return htmlTemplate;
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default CatalogSearch;
