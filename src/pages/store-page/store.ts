import Page from '../../components/page';

class StorePage extends Page {
  static CodeBlock = {
    MainTitle: `
    <div class="store__title">Сюда вставим код для основной страницы с товарами</div>
    `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(StorePage.CodeBlock.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default StorePage;
