import Page from '../../components/page';
import ErrorComponent from '../../components/error/error-component';

class ErrorPage extends Page {
  static CodeBlock = new ErrorComponent().render();

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createBlock(ErrorPage.CodeBlock);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
