import { ItemCart } from '../types/types';
import { ITEM } from '../types/constants';
import PRODUCTS from './products';

class LocalStorage {
  private keyName: string;

  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id: number, price: number) {
    let products = this.getProducts();
    const index = products.some((object: ItemCart) => object.id === id && object.price === price);

    if (!index) {
      ITEM.id = id;
      ITEM.price = price;
      products.push(ITEM);
    } else {
      products = products.filter((object: ItemCart) => object.id !== id && object.price !== price);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { products };
  }

  putOneTypeProducts(id: string, boolean: boolean) {
    const products = this.getProducts();
    const index = products.findIndex((item: ItemCart) => item.id === +id);
    let fixedPrice: number | null = null;
    PRODUCTS.forEach((item) => {
      if (item.id === +id) fixedPrice = item.price;
    });
    if (boolean) {
      products[index].count = ++products[index].count;
      products[index].price = products[index].price + fixedPrice;
    } else {
      if (fixedPrice) {
        products[index].count = --products[index].count;
        products[index].price = products[index].price - fixedPrice;
      }
    }
    localStorage.setItem(this.keyName, JSON.stringify(products));
    return { products };
  }

  getOneTypeProductsAmount(id: string) {
    const products = this.getProducts();
    const index = products.findIndex((item: ItemCart) => item.id === +id);
    return products[index].count;
  }

  getButtonState(id: number) {
    const products = this.getProducts();
    let pushProduct = false;
    const index = products.some((object: ItemCart) => object.id === id);

    if (!index) {
      pushProduct = true;
    } else {
      pushProduct = false;
    }

    return pushProduct;
  }
}

export default LocalStorage;
