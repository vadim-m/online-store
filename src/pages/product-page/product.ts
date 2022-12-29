import Page from '../../components/page';
import ProductFull from '../../components/products/productFull';

class ProductPage extends Page {
  private product = new ProductFull();

  constructor(id: string) {
    super(id);
  }

  getId() {
    const params = window.location.search;
    // const searchParams = new URLSearchParams(params);
    const id = +params.slice(-1);
    return id;
  }

  render() {
    const id = this.getId();
    const title = this.product.render(id);

    this.container.append(title);
    return this.container;
  }
}

export default ProductPage;
