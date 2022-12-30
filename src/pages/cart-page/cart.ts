import Page from '../../components/page';

class CartPage extends Page {
  static htmlTemplate = `
    <div class="cart"> СТРАНИЦА КОРЗИНЫ
    </div>
  `;

  constructor(className: string) {
    super(className);
  }

  render() {
    const title = this.createBlock(CartPage.htmlTemplate);
    this.mainEl.append(title);
    return this.mainEl;
  }
}

export default CartPage;
