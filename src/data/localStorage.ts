import { ItemCart } from '../types/types';

class LocalStorage {
  private keyName: string;
  private priceName: string;

  constructor() {
    this.keyName = 'products';
    this.priceName = 'prices';
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  getPrice() {
    const pricesLocalStorage = localStorage.getItem(this.priceName);
    if (pricesLocalStorage !== null) {
      return JSON.parse(pricesLocalStorage);
    }
    return [];
  }

  putProducts(id: number, price: number) {
    let products = this.getProducts();
    const index = products.some((object: ItemCart) => object.id === id && object.price === price);
    const item = {
      id: 0,
      price: 0,
      count: 1,
    };

    if (!index) {
      item.id = id;
      item.price = price;
      products.push(item);
    } else {
      products = products.filter((object: ItemCart) => object.id !== id && object.price !== price);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { products };
  }

  putPrices(price: number) {
    const prices = this.getPrice();
    const index = prices.indexOf(price);

    if (index === -1) {
      prices.push(price);
    } else {
      prices.splice(index, 1);
    }

    localStorage.setItem(this.priceName, JSON.stringify(prices));

    return { prices };
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
