import Page from '../../components/page';
import CartComponent from '../../components/cart/cart';

class CartPage extends Page {
  static CodeBlock = new CartComponent().render();

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(CartPage.CodeBlock);
    this.container.append(title);
    return this.container;
  }
}

export default CartPage;
