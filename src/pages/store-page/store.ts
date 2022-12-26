import Page from '../../components/page';
//import CATALOG from '../../constants/catalog';
//import { rootProducts } from '../../constants/constants';

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

  // renderItems() {
  //   const block = document.createElement('div');
  //   block.className = 'store__products';
  //   let htmlCatalog = '';

  //   CATALOG.forEach(({ name, price, img }) => {
  //     htmlCatalog += `
  //             <li class="item">
  //                 <img src="${img}" />
  //                 <span class="item__name">${name}</span>
  //                 <span class="item__price">${price}</span>
  //                 <button class="item__button">Добавить в корзину</button>
  //             </li>
  //         `;
  //   });

  //   const html = `
  //         <ul class="store__list">
  //             ${htmlCatalog}
  //         </ul>
  //     `;

  //   block.innerHTML = html;

  //   return block;
  // }
}

export default StorePage;
