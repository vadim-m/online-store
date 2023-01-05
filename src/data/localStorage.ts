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

  putProducts(id: number) {
    const products = this.getProducts();
    //let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      //pushProduct = true;
      //console.log(pushProduct);
    } else {
      products.splice(index, 1);
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
    const index = products.indexOf(id);

    if (index === -1) {
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    return pushProduct;
  }
}

export default LocalStorage;
