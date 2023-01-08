import Component from '../component';

class SortLabel extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderSortLabel() {
    const htmlTemplate = `
      <label class="sort__label">Сортировать:
      <select class="sort__select">
        <option value="default" selected>По умолчанию</option>
        <option value="p-des">Цена ↓</option>
        <option value="p-asc">Цена ↑</option>
        <option value="n-des">А - Я</option>
        <option value="n-asc">Я - А</option>
      </select>
      </label>
    `;
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default SortLabel;
