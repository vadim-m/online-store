import Page from '../../components/page';

class ErrorPage extends Page {
  static CodeBlock = {
    MainTitle: `
      <div class="error__title">Ошибка 404. Страница не найдена</div>
    `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(ErrorPage.CodeBlock.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
