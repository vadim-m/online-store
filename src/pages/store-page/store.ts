import Page from '../../components/page';
import StoreComponent from '../../components/store/store-component';

class StorePage extends Page {
  static CodeBlock = new StoreComponent().render();

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(StorePage.CodeBlock);
    this.container.append(title);
    return this.container;
  }
}

export default StorePage;
