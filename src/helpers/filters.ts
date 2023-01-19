import PRODUCTS from '../data/products';
import { IProduct } from '../types/interfaces';
import { getParamsSpecificValue } from './hash';

export function getPossibleVaulesListByKey(array: IProduct[], key: string) {
  return Array.from(new Set(array.map((product) => product[key as keyof IProduct]))).sort();
}

export function getMinProductsValue(array: IProduct[], key: string) {
  const arrayResult = array.map((product) => product[key as keyof IProduct]) as number[];

  return Math.min(...arrayResult);
}

export function getMaxProductsValue(array: IProduct[], key: string) {
  const arrayResult = array.map((product) => product[key as keyof IProduct]) as number[];

  return Math.max(...arrayResult);
}

function filterProductsBySearchValue(products: IProduct[], value: string) {
  const searchValue = value.toLocaleLowerCase();
  const filteredProducts = products.filter((element) => {
    return (
      element.title.toLowerCase().includes(searchValue) ||
      element.brand.toLowerCase().includes(searchValue) ||
      element.color.toLowerCase().includes(searchValue) ||
      element.stock.toString().includes(searchValue) ||
      element.price.toString().includes(searchValue)
    );
  });

  return filteredProducts;
}

export function getFilteredProducts(products: IProduct[]) {
  const brandValue =
    getParamsSpecificValue('brand') ?? getPossibleVaulesListByKey(PRODUCTS, 'brand');
  const categoryValue =
    getParamsSpecificValue('category') ?? getPossibleVaulesListByKey(PRODUCTS, 'category');
  const colorValue =
    getParamsSpecificValue('color') ?? getPossibleVaulesListByKey(PRODUCTS, 'color');
  const minStockValue = getParamsSpecificValue('minStock') ?? '0';
  const maxStockValue = getParamsSpecificValue('maxStock') ?? '100000'; // !
  const minPriceValue = getParamsSpecificValue('minPrice') ?? '0';
  const maxPriceValue = getParamsSpecificValue('maxPrice') ?? '100000'; // !

  let filteredProducts = products.filter((element) => {
    return (
      brandValue.includes(element.brand) &&
      categoryValue.includes(element.category) &&
      colorValue.includes(element.color) &&
      element.price >= +minPriceValue &&
      element.price <= +maxPriceValue &&
      element.stock >= +minStockValue &&
      element.stock <= +maxStockValue
    );
  });

  const searchValue = getParamsSpecificValue('search') ?? null;
  if (searchValue) {
    filteredProducts = filterProductsBySearchValue(filteredProducts, searchValue);
  }

  if (filteredProducts.length === 0) {
    return [
      {
        brand: 'fake',
        category: 'fake',
        color: 'fake',
        description: 'fake',
        id: 0,
        images: [],
        material: 'fake',
        price: 0,
        stock: 0,
        thumbnail: 'https://basharathospital.clinta.biz/assets/under-construction.png',
        title: 'Товаров не найдено',
        top: 'fake',
      },
    ];
  }

  return filteredProducts;
}

export function getSortedProducts(filteredProducts: IProduct[], sortBy: string) {
  switch (sortBy) {
    case 'p-asc':
      return filteredProducts.sort((a: IProduct, b: IProduct) => a.price - b.price);

    case 'p-des':
      return filteredProducts.sort((a: IProduct, b: IProduct) => -a.price + b.price);

    case 'n-asc':
      return filteredProducts.sort((a: IProduct, b: IProduct) => {
        const firstTitle = a.title.toLocaleLowerCase();
        const secondTitle = b.title.toLocaleLowerCase();
        if (firstTitle > secondTitle) {
          return 1;
        }
        if (firstTitle < secondTitle) {
          return -1;
        }

        return 0;
      });

    case 'n-des':
      return filteredProducts.sort((a: IProduct, b: IProduct) => {
        const firstTitle = a.title[0];
        const secondTitle = b.title[0];
        if (firstTitle > secondTitle) {
          return -1;
        }
        if (firstTitle < secondTitle) {
          return 1;
        }

        return 0;
      });

    default:
      return filteredProducts;
  }
}
