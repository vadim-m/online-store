import Component from '../component';

class CatalogSearch extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  addSearch() {
    const htmlTemplate = `
      <div class="search">
        <input class="search__input" type="search" id="search" placeholder="Какой товар Вас интересует?"
        autocomplete="off">
        <div class="search__result">
          <span class="search__result-text">Товаров найдено:&nbsp;</span>
          <span class="search__result-amount">2</span>
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
