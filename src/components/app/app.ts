import Page from '../page';
import StorePage from '../../pages/store-page/store';
import CartPage from '../../pages/cart-page/cart';
import ProductPage from '../../pages/product-page/product';
import Header from '../header/header';
import ErrorPage from '../../pages/error-page/error';
import { PageIds } from '../../types/types';

class App {
  private static container: HTMLElement = document.querySelector('.wrapper') as HTMLElement;
  private static defaultPageId = 'current-page';
  private header: Header;

  constructor() {
    this.header = new Header('header', 'header');
  }

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    console.log(currentPageHTML);

    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    switch (idPage) {
      case PageIds.StorePage:
        page = new StorePage(idPage);
        break;
      case PageIds.CartPage:
        page = new CartPage(idPage);
        break;
      case PageIds.ProductPage:
        page = new ProductPage(idPage);
        break;
      default:
        page = new ErrorPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as Element;
      if (target instanceof HTMLElement && !target.matches('div a')) {
        return;
      }
      event.preventDefault();
      this.urlRoute(event);
    });
  }

  private urlRoute(event: Event) {
    event = event || window.event;
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    if (target) {
      window.history.pushState({}, '', target.href);
      this.urlLocationHandler();
    }
  }

  private urlLocationHandler() {
    const location = window.location.pathname.slice(1);
    App.renderNewPage(location);
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('store');
    this.enableRouteChange();
  }
}

export default App;
