import Page from '../../components/page';

class CartPage extends Page {
  static CodeBlock = {
    MainTitle: `
      <div>Сюда вставляем код корзины</div>
    `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(CartPage.CodeBlock.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default CartPage;
