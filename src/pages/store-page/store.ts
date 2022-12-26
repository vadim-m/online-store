import Page from '../../components/page';

class StorePage extends Page {
  static CodeBlock = {
    MainTitle: `
    <div class="products"></div>
    `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(StorePage.CodeBlock.MainTitle);
    //title.append(this.renderItems());
    this.container.append(title);
    return this.container;
  }
}

export default StorePage;
