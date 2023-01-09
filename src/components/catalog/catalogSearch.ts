import Component from '../component';

class CatalogSearch extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  setFoundProductsAmount() {
    let amount = '';
    const products = this.container.querySelectorAll('.product');
    if (products.length === 1 && products[0].id === '0') {
      amount = '0';
    } else {
      amount = `${products.length}`;
    }
    console.log(products);

    const btn = <HTMLFormElement>this.container.querySelector('.search__result-amount');
    btn.textContent = amount;
  }

  addSearch() {
    const htmlTemplate = `
      <div class="search">
        <input class="search__input" type="search" id="search" placeholder="Какой товар Вас интересует?"
        autocomplete="off">
        <div class="search__result">
          <span class="search__result-text">Товаров найдено:&nbsp;</span>
          <span class="search__result-amount">0</span>
        </div>
      </div">
    `;

    return htmlTemplate;
  }

  render() {
    const htmlTemplate = this.addSearch();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default CatalogSearch;
