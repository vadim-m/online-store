export function countDiscountPrice(fullPrice: number) {
  return fullPrice - (fullPrice / 100) * 10;
}

export function checkForPromoCode(array: string[]) {
  if (array.length !== 0) {
    return array[array.length - 1];
  } else return '';
}

export function makeDiscountVisible(array: string[]) {
  if (array.length !== 0) {
    return 'visible';
  } else return '';
}

export function makePriceCrossed(array: string[]) {
  if (array.length !== 0) {
    return 'active';
  } else return '';
}
