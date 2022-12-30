import Page from '../../components/page';
import ProductFull from '../../components/products/productFull';

class ProductPage extends Page {
  private product: ProductFull;
  // ! нужно получить ID и передать в конструктор

  constructor(className: string) {
    super(className);
    this.product = new ProductFull('div', 'container', this.getId());
  }

  getId() {
    const hash = window.location.hash;
    const queries = hash.split('?')[1];
    const searchParams = new URLSearchParams(queries);
    const id = searchParams.get('id');
    // console.log(queries, searchParams.toString(), id);

    return +id!;
  }

  render() {
    const title = this.product.render();

    this.mainEl.append(title);
    return this.mainEl;
  }
}

export default ProductPage;
