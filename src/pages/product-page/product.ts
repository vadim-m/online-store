import Page from '../../components/page';
import ProductFull from '../../components/products/productFull';

class ProductPage extends Page {
  static CodeBlock = new ProductFull().render(0); // addEventListener/ передавать индекс

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(ProductPage.CodeBlock);
    this.container.append(title);
    return this.container;
  }
}

export default ProductPage;
