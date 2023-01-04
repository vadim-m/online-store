import Component from '../component';

class Error extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderError() {
    const container = document.createElement('div');
    container.className = 'error';

    const htmlTemplate = `
      <div class="error__text">
        <h1 class="error__title">Oops!</h1>
        <h2 class="error__subtitle">YOU'RE LOST...</h2>
        <h3 class="error__number">Error code: 404</h3>
        <h3 class="error__button">BACK TO HOMEPAGE</h3>
      </div>
      <div class="error__img-main">
        <img src="https://i.ibb.co/sCkPhrF/dino-bat-1.gif" alt="Error image" class="error__img">
      </div>
    `;

    container.innerHTML = htmlTemplate;

    this.container.append(container);
  }

  render() {
    this.renderError();
    return this.container;
  }
}

export default Error;
