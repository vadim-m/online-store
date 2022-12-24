import Page from '../../components/page';

class ProductPage extends Page {
  static CodeBlock = {
    MainTitle: `
      <div class="product-details__title">Сюда вставляем код для описания товара</div>
    `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(ProductPage.CodeBlock.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default ProductPage;
