import Page from '../../components/page';

class ErrorPage extends Page {
  static htmlTemplate = `
    <div class="error">
      <div class="error__text">
        <h1 class="error__title">Oops!</h1>
        <h2 class="error__subtitle">YOU'RE LOST...</h2>
        <h3 class="error__number">Error code: 404</h3>
        <h3 class="error__button">BACK TO HOMEPAGE</h3>
      </div>
      <div class="error__img-main">
        <img src="https://i.ibb.co/sCkPhrF/dino-bat-1.gif" alt="Error image" class="error__img">
      </div>
    </div>
  `;

  constructor(className: string) {
    super(className);
  }

  render() {
    const title = this.createBlock(ErrorPage.htmlTemplate);
    this.mainEl.append(title);
    return this.mainEl;
  }
}

export default ErrorPage;
