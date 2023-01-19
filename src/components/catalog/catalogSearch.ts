import Component from '../component';
import { deleteParams, getParamsSpecificValue, replaceParams } from '../../helpers/hash';

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

  addListeners() {
    this.container.querySelector('.search__input')?.addEventListener('search', (e) => {
      e.preventDefault();
      const input = <HTMLInputElement>e.target;
      const value = input.value;
      if (value === '' || value === ' ') {
        deleteParams('search');
      } else {
        replaceParams('search', value.toLocaleLowerCase());
      }
    });
    this.container.querySelector('.search__input-find')?.addEventListener('click', (e) => {
      e.preventDefault();
      const searchInput = <HTMLInputElement>this.container.querySelector('.search__input');
      if (searchInput) {
        const eventToDispatch = new Event('search');
        searchInput.dispatchEvent(eventToDispatch);
      }
    });
    this.container.querySelector('.search__input-reset')?.addEventListener('click', (e) => {
      e.preventDefault();
      deleteParams('search');
      const searchInput = <HTMLInputElement>this.container.querySelector('.search__input');
      if (searchInput) {
        searchInput.value = '';
      }
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;
    this.addListeners();

    return this.container;
  }
}

export default CatalogSearch;
