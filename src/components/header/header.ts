import ComponentHF from '../componentHeader';
import { PageLinks } from '../../types/constants';
import LocalStorage from '../../data/localStorage';

const logo = require('../../assets/img/logo/logo.png');

class Header extends ComponentHF {
  private localStorage: LocalStorage;

  constructor() {
    super();
    this.localStorage = new LocalStorage();
  }

  countPrice() {
    const pricesInStorage = this.localStorage.getPrice();
    return pricesInStorage.length > 0 ? pricesInStorage.reduce((a: number, b: number) => a + b) : 0;
  }

  countProducts() {
    const productsInStorage = this.localStorage.getProducts();
    return productsInStorage.length;
  }

  render() {
    const oldHeader = document.querySelector(`.header__container`);

    if (oldHeader) {
      oldHeader.remove();
    }

    const container = document.createElement('div');
    container.className = 'container  header__container';

    const componentCode = `
    <a class="header__logo" href="#${PageLinks[0].id}?">
      <img src="${logo}" alt="Site Logo!" class="header__logo-pic">
    </a>
    <div class="header__order">
      <div class="header__amount">
        <span class="header__sum">${this.countPrice()}</span>
        <span class="header__currency">₽</span>
      </div>
      <a class="header__cart header__cart_filled" href="#${PageLinks[1].id}?">
        <span class="header__cart-counter">${this.countProducts()}</span>
      </a>
    </div>
    `;

    container.innerHTML = componentCode;

    this.wrapper.prepend(container);
  }
}

export default Header;
