import Component from '../component';

class CatalogFilters extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    this.container.innerHTML = `
      <form class="filters">
        <fieldset class="filters__group">
          <legend class="filters__subtitle">Бренд:</legend>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            DomaYA
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Kucha
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            IKEA
          </label>
        </fieldset>

        <fieldset class="filters__group">
          <legend class="filters__subtitle">Категория:</legend>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Бокалы
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Кружки
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Приборы
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Сервизы
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Стаканы
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Тарелки
          </label>
        </fieldset>

        <fieldset class="filters__group">
          <legend class="filters__subtitle">Цвет:</legend>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Белый
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Золотой
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Зеленый
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Прозрачный
          </label>
          <label class="filters__checkbox">
            <input class="filters__input hide" type="checkbox">
            <span class="filters__checkbox-span"></span>
            Черный
          </label>
        </fieldset>

        <fieldset class="filters__group">
          <legend class="filters__subtitle">Цена:</legend>
          <input calss="filters__range" type="range">
        </fieldset>

        <fieldset class="filters__group">
          <legend class="filters__subtitle">Наличие:</legend>
          <input calss="filters__range" type="range">
        </fieldset>

        <fieldset class="filters__buttons">
          <button class="filters__btn">Сбросить</button>
          <button class="filters__btn">Копировать</button>
        </fieldset>
    </form>
   `;
    return this.container;
  }
}

export default CatalogFilters;
