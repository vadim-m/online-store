import { PageIds } from './types';

export const PageLinks = [
  {
    id: PageIds.StorePage,
  },
  {
    id: PageIds.CartPage,
  },
  {
    id: PageIds.ProductPage,
  },
];

export const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const NAME_REGEXP = /^[A-Za-zА-Яа-яЁё]{3,}\s{1,}([A-Za-zА-Яа-яЁё]{3,}){1,}$/iu;

export const PHONE_REGEXP = /\+\d{9,}$/iu;

export const ADDRESS_REGEXP =
  /^[A-Za-zА-Яа-яЁё]{5,}\s{1,}[A-Za-zА-Яа-яЁё]{5,}\s{1,}([A-Za-zА-Яа-яЁё]{5,}){1,}$/iu;

export const CARD_REGEXP = /\d{4}\s\d{4}\s\d{4}\s\d{4}/iu;

export const DATE_REGEXP = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/iu;

export const CVV_REGEXP = /\d{3}/iu;

export const ITEM = {
  id: 0,
  price: 0,
  count: 1,
};
