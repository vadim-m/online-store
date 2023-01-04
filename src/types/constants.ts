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

export const NAME_REGEXP = /^[A-Za-zА-Яа-яЁё]{3,}\s{1,}([A-Za-zА-Яа-яЁё]{3,}){1,}$/gi;

export const PHONE_REGEXP = /\+\d{9,}$/gi;

export const ADDRESS_REGEXP =
  /^[A-Za-zА-Яа-яЁё]{5,}\s{1,}[A-Za-zА-Яа-яЁё]{5,}\s{1,}([A-Za-zА-Яа-яЁё]{5,}){1,}$/gi;

export const CARD_REGEXP = /\d{4}\s\d{4}\s\d{4}\s\d{4}/g;

export const DATE_REGEXP = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/gi;

export const CVV_REGEXP = /\d{3}/g;
