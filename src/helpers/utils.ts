import {
  NAME_REGEXP,
  EMAIL_REGEXP,
  PHONE_REGEXP,
  ADDRESS_REGEXP,
  CARD_REGEXP,
  DATE_REGEXP,
  CVV_REGEXP,
} from '../types/constants';

// НАВЕШИВАЕМ ОБРАБОТЧИКИ

export function addEvents() {
  const buttonBuy = document.getElementById('buy');
  const buttonClose = document.getElementById('close');
  const form = document.getElementById('form');
  const inputNumber = document.getElementById('number');
  const inputDate = document.getElementById('date');
  const inputCVV = document.getElementById('cvv');

  if (buttonBuy && buttonClose && form && inputNumber && inputDate && inputCVV) {
    buttonBuy.addEventListener('click', openModalForm);
    buttonClose.addEventListener('click', closeModalForm);
    form.addEventListener('submit', handleForm);
    inputNumber.addEventListener('input', addSpace);
    inputDate.addEventListener('input', addSplitter);
    inputCVV.addEventListener('input', fixLength);
  }
}

// ЗАКРЫТЬ/ОТКРЫТЬ

export function openModalForm() {
  const form = document.getElementById('modal-form');
  form?.classList.add('modal-form_open');
}

export function closeModalForm() {
  const form = document.getElementById('modal-form') as HTMLElement;
  form?.classList.remove('modal-form_open');
}

// ПРОВЕРКА ВСЕХ ПОЛЕЙ НА ВАЛИДНОСТЬ

export function handleForm(e: Event) {
  e.preventDefault();
  const form = document.getElementById('form') as HTMLElement;

  if (validation(form)) alert('Заказ оформлен!');
}

// ПРОВЕРЯЕМ ПУСТЫЕ ЛИ ПОЛЯ

function validation(form: HTMLElement) {
  let result = true;
  form.querySelectorAll<HTMLInputElement>('.form__input').forEach((input) => {
    const check = validateInput(input);
    if (!check) {
      validationError(input, 'Ошибка');
      result = false;
    } else validationSuccess(input);
  });
  return result;
}

// ПРОВЕРЯЕМ КАЖДЫЙ ИНПУТ

function validateInput(input: HTMLInputElement) {
  const value = input.value;

  switch (input.dataset.validationtype) {
    case 'name':
      return NAME_REGEXP.test(value);
    case 'phone':
      return PHONE_REGEXP.test(value);
    case 'address':
      return ADDRESS_REGEXP.test(value);
    case 'email':
      return EMAIL_REGEXP.test(value);
    case 'number':
      return CARD_REGEXP.test(value);
    case 'date':
      return DATE_REGEXP.test(value);
    case 'cvv':
      return CVV_REGEXP.test(value);
    default:
      return value !== '';
  }
}

// ВАЛИДАЦИЯ В СЛУЧАЕ УСПЕХА

function validationSuccess(input: HTMLInputElement) {
  if (input.classList.contains('error')) {
    input.classList.remove('error');
    if (input.nextElementSibling) input.nextElementSibling.textContent = '';
  }
}

// ВАЛИДАЦИЯ В СЛУЧАЕ ОШИБКИ

function validationError(input: HTMLInputElement, message: string) {
  if (input.classList.contains('error')) {
    if (input.nextElementSibling && input.nextElementSibling.textContent) {
      if (input.nextElementSibling.textContent.length != 0) {
        input.nextElementSibling.textContent = message;
      }
    }
    return;
  } else {
    input.classList.add('error');
    if (input.nextElementSibling) input.nextElementSibling.textContent = message;
  }
}

// ОБРЕЗАЕТ НОМЕР КАРТЫ И ВСТАВЛЯЕТ ПРОБЕЛЫ

export function addSpace(event: Event) {
  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.slice(0, 19);
  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value
    .replace(/[^0-9]/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

// ОБРЕЗАЕТ СРОК ДЕЙСТВИЯ И ВСТАВЛЯЕТ РАЗДЕЛИТЕЛЬ

export function addSplitter(event: Event) {
  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.slice(0, 5);
  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value
    .replace(/[^0-9]/gi, '')
    .replace(/(.{2})/g, '$1/');
}

// ОБРЕЗАЕТ CVV

export function fixLength(event: Event) {
  (<HTMLInputElement>event.target).value = (<HTMLInputElement>event.target).value.slice(0, 3);
}
