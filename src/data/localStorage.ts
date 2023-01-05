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

  putProducts(id: number) {
    const products = this.getProducts();
    products.push(id);

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { products };
  }
}

export default LocalStorage;
