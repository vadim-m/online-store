import { Product } from '../types/interfaces';

const PRODUCTS: Product[] = [
  {
    id: 1,
    brand: 'Kuchaland',
    title: 'Кружка, 330 мл, 2 шт',
    price: 2550,
    category: 'Кружки',
    stock: 20,
    description:
      'Идеально подходит для горячих или холодных напитков, препятствуя их быстрому остыванию или нагреву. Нельзя использовать в микроволновой печи.',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/1/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/1/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/1/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/1/3.webp',
    ],
  },
  {
    id: 2,
    brand: 'AKIE',
    title: 'Бокал для мартини, 240 мл',
    price: 400,
    category: 'Бокалы',
    stock: 23,
    description:
      'По блеску и прозрачности этот бокал трудно отличить от хрустального, хотя он изготовлен из стекла без добавления свинца. Бокалы издают приятный звук, когда ими чокаются.',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/2/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/2/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/2/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/2/3.webp',
    ],
  },
  {
    id: 3,
    brand: 'DomaYa',
    title: 'Набор столовых приборов, 24 предмета',
    price: 54000,
    category: 'Приборы',
    stock: 7,
    description:
      'Столовые приборы с уникальным PVD-покрытием. Именно это покрытие позволяет создавать необычные актуальные оттенки приборов — медный, золотой и чёрный цвет.',
    material: 'Латунь',
    color: 'Золотой',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/3/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/3/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/3/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/3/3.webp',
    ],
  },
  {
    id: 4,
    brand: 'DomaYa',
    title: 'Тарелка обеденная, 27 см',
    price: 2500,
    category: 'Тарелки',
    stock: 19,
    description:
      'Подходит для использования в микроволновой печи. Рекомендуется мыть вручную с применением мягких моющих средств.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/4/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/4/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/4/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/4/3.webp',
    ],
  },
  {
    id: 5,
    brand: 'Kuchaland',
    title: 'Чайная пара, 240 мл, 2 шт',
    price: 3990,
    category: 'Кружки',
    stock: 16,
    description:
      'Пара чайная, 2 персоны, 4 предмета. Подходит для использования в микроволновой печи.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/5/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/5/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/5/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/5/3.webp',
    ],
  },
  {
    id: 6,
    brand: 'Kuchaland',
    title: 'Бокал для шампанского, 180 мл, 4 шт',
    price: 3990,
    category: 'Бокалы',
    stock: 25,
    description:
      'Бокал для шампанского, 4 штуки. Рекомендуется мыть вручную с применением мягких моющих средств. Не использовать для ухода абразивные чистящие средства и жёсткие губки. Нельзя мыть в посудомоечной машине.',
    material: 'Стекло',
    color: 'Перламутр',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/6/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/6/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/6/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/6/3.webp',
    ],
  },
  {
    id: 7,
    brand: 'AKIE',
    title: 'Стакан POKAL, 350 мл',
    price: 299,
    category: 'Стаканы',
    stock: 44,
    description:
      'Изготовлено из закаленного стекла, которое отличается долговечностью и особой ударопрочностью.',
    material: 'Стекло',
    color: 'Синий',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/7/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/7/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/7/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/7/3.webp',
    ],
  },
  {
    id: 8,
    brand: 'Kuchaland',
    title: 'Набор столовых приборов, 24 предмета',
    price: 15990,
    category: 'Приборы',
    stock: 3,
    description:
      'Столовые приборы, 6 персон, 24 предмета. Не использовать для ухода абразивные чистящие средства и жёсткие губки. Можно мыть в посудомоечной машине.',
    material: 'Сталь',
    color: 'Серебристый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/8/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/8/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/8/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/8/3.webp',
    ],
  },
  {
    id: 9,
    brand: 'DomaYa',
    title: 'Тарелка десертная, 24 см',
    price: 3300,
    category: 'Тарелки',
    stock: 26,
    description:
      'Подходит для использования в микроволновой печи. Рекомендуется мыть вручную с применением мягких моющих средств.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/9/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/9/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/9/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/9/3.webp',
    ],
  },
  {
    id: 10,
    brand: 'Kuchaland',
    title: 'Сервиз обеденный, 19 предметов',
    price: 25990,
    category: 'Сервизы',
    stock: 7,
    description:
      'Сервиз обеденный, 6 персон, 19 предметов. Материал: фарфор Fine Bone China. Можно мыть в посудомоечной машине исключительно на щадящем режиме. Использование других режимов повлечет порчу декоративного орнамента. Подходит для использования в микроволновой печи.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/10/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/10/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/10/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/10/3.webp',
    ],
  },
  {
    id: 11,
    brand: 'DomaYa',
    title: 'Бокал для вина, 650 мл',
    price: 2500,
    category: 'Бокалы',
    stock: 13,
    description:
      'Бокал подойдет как для красного, так и для белого вина. Поставляется в подарочной упаковке по 1 шт.',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/11/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/11/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/11/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/11/3.webp',
    ],
  },
  {
    id: 12,
    brand: 'AKIE',
    title: 'Набор столовых приборов, 24 предмета',
    price: 4990,
    category: 'Приборы',
    stock: 13,
    description:
      'Сделайте сервировку праздничной: воспользуйтесь столовыми приборами простой и лаконичной формы.',
    material: 'Сталь',
    color: 'Серебристый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/12/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/12/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/12/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/12/3.webp',
    ],
  },
  {
    id: 13,
    brand: 'DomaYa',
    title: 'Набор тарелок десертных, 6 шт',
    price: 8500,
    category: 'Сервизы',
    stock: 3,
    description:
      'Фарфоровую посуду этой серии отличает элегантный волнистый край. Оформите сервировку в едином традиционном стиле или комбинируйте предметы серии с другой посудой. Размер тарелок - 20 см.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/13/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/13/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/13/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/13/3.webp',
    ],
  },
  {
    id: 14,
    brand: 'Kuchaland',
    title: 'Сервиз чайный, 15 предметов',
    price: 12450,
    category: 'Сервизы',
    stock: 6,
    description:
      'Сервиз чайный, 6 персон, 15 предметов. Материал: фарфор Fine Bone China. Можно мыть в посудомоечной машине исключительно на щадящем режиме. Использование других режимов повлечет порчу декоративного орнамента. Подходит для использования в микроволновой печи.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/14/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/14/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/14/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/14/3.webp',
    ],
  },
  {
    id: 15,
    brand: 'DomaYa',
    title: 'Бокал Cactus Yellow, 240 мл',
    price: 3600,
    category: 'Бокалы',
    stock: 55,
    description:
      'Бокал подойдет как для красного, так и для белого вина. Поставляется в подарочной упаковке по 1 шт.',
    material: 'Стекло',
    color: 'Желтный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/15/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/15/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/15/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/15/3.webp',
    ],
  },
  {
    id: 16,
    brand: 'Kuchaland',
    title: 'Стакан, 480 мл, 2 шт',
    price: 2990,
    category: 'Стаканы',
    stock: 19,
    description:
      'Стакан, 2 штуки. Не использовать для ухода абразивные чистящие средства и жёсткие губки. Нельзя мыть в посудомоечной машине. Не подходит для использования в микроволновой печи.',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/16/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/16/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/16/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/16/3.webp',
    ],
  },
  {
    id: 17,
    brand: 'AKIE',
    title: 'Тарелка ФЭКЛАР, 26 см',
    price: 990,
    category: 'Тарелки',
    stock: 51,
    description:
      'Отличное обрамление любого блюда. Тарелка ФЭКЛАР лаконичного дизайна прекрасно сочетается с другой столовой посудой. Выберите традиционную матовую поверхность или современную глянцевую.',
    material: 'Фарфор',
    color: 'Черный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/17/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/17/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/17/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/17/3.webp',
    ],
  },
  {
    id: 18,
    brand: 'DomaYa',
    title: 'Чайная пара Pink Rose, 200 мл',
    price: 1750,
    category: 'Кружки',
    stock: 10,
    description:
      'Идеально подходит для горячих или холодных напитков, препятствуя их быстрому остыванию или нагреву.',
    material: 'Фарфор',
    color: 'Розовый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/18/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/18/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/18/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/18/3.webp',
    ],
  },
  {
    id: 19,
    brand: 'DomaYa',
    title: 'Набор столовых приборов, 24 предмета',
    price: 30600,
    category: 'Приборы',
    stock: 5,
    description:
      'Сделайте сервировку праздничной: воспользуйтесь столовыми приборами простой и лаконичной формы.',
    material: 'Сталь',
    color: 'Серебристый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/19/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/19/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/19/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/19/3.webp',
    ],
  },
  {
    id: 20,
    brand: 'Kuchaland',
    title: 'Набор столовых приборов, 68 предметов',
    price: 35500,
    category: 'Приборы',
    stock: 8,
    description:
      'Столовые приборы, 12 персон, 68 предметов. Материал: нержавеющая сталь 18/10. Можно мыть в посудомоечной машине.',
    material: 'Сталь',
    color: 'Серебристый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/20/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/20/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/20/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/20/3.webp',
    ],
  },
  {
    id: 21,
    brand: 'DomaYa',
    title: 'Бокал для игристого TUTU, 180 мл',
    price: 2500,
    category: 'Бокалы',
    stock: 4,
    description:
      'Бокал флюте для шампанского (flute – «флейта») долго удерживает свои позиции и считается идеальным за счет способности удерживать пузырьки. Ценителям «флейты» DomaYa предлагает серию TUTU, которая отличается очень тонким и прочным стеклом.',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/21/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/21/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/21/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/21/3.webp',
    ],
  },
  {
    id: 22,
    brand: 'DomaYa',
    title: 'Набор хрустальных бокалов для игристого, 6 шт',
    price: 18000,
    category: 'Бокалы',
    stock: 9,
    description:
      'Необычные бокалы для вина, которые сочетают в себе традиции ремесленников и инновации современных дизайнеров. Всё, чтобы вы наслаждались комфортом и элегантностью одновременно.',
    material: 'Хрусталь',
    color: 'Прозрачный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/22/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/22/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/22/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/22/3.webp',
    ],
  },
  {
    id: 23,
    brand: 'AKIE',
    title: 'Сервиз UPLAGG, 18 предметов',
    price: 44990,
    category: 'Сервизы',
    stock: 2,
    description:
      'Фарфоровую посуду этой серии отличает элегантный волнистый край. Оформите сервировку в едином традиционном стиле или комбинируйте предметы серии с другой посудой.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/23/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/23/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/23/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/23/3.webp',
    ],
  },
  {
    id: 24,
    brand: 'DomaYa',
    title: 'Тарелка обеденная, 28.5 см',
    price: 1650,
    category: 'Тарелки',
    stock: 24,
    description:
      'Подходит для использования в микроволновой печи. Рекомендуется мыть вручную с применением мягких моющих средств.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/24/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/24/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/24/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/24/3.webp',
    ],
  },
  {
    id: 25,
    brand: 'Kuchaland',
    title: 'Бокал для вина, 560 мл',
    price: 9990,
    category: 'Бокалы',
    stock: 10,
    description:
      'Бокалы подойдут как для красного, так и для белого вина. Поставляется в подарочной упаковке по 2 шт.',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/25/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/25/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/25/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/25/3.webp',
    ],
  },
  {
    id: 26,
    brand: 'DomaYa',
    title: 'Набор тарелок десертных, 6 шт',
    price: 7650,
    category: 'Сервизы',
    stock: 12,
    description:
      'Нежная плавность линий лиможского фарфора в сочетании с утончённой художественной отделкой, вызывают искреннее восхищение. Подходит для использования в микроволновой печи. Рекомендуется мыть вручную с применением мягких моющих средств.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/26/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/26/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/26/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/26/3.webp',
    ],
  },  
  {
    id: 27,
    brand: 'AKIE',
    title: 'Тарелка, 12x7 см',
    price: 800,
    category: 'Тарелки',
    stock: 33,
    description:
      'Глазурованная тарелка насыщенного синего цвета с золотисто-коричневым ободком украсит любое блюдо.',
    material: 'Фарфор',
    color: 'Синий',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/27/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/27/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/27/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/27/3.webp',
    ],
  },
  {
    id: 28,
    brand: 'Kuchaland',
    title: 'Столовые приборы, 24 предмета',
    price: 6990,
    category: 'Приборы',
    stock: 16,
    description:
      'Столовые приборы, 24 предмета. Материал: нержавеющая сталь 18/10. Рекомендуется мыть вручную во избежание появления царапин на поверхности приборов. Можно мыть в посудомоечной машине.',
    material: 'Сталь',
    color: 'Серебристый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/28/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/28/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/28/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/28/3.webp',
    ],
  },
  {
    id: 29,
    brand: 'DomaYa',
    title: 'Чашка чайная, 250 мл',
    price: 1250,
    category: 'Кружки',
    stock: 25,
    description:
      'Нежная плавность линий лиможского фарфора в сочетании с утончённой художественной отделкой, вызывают искреннее восхищение. Идеально подходит для горячих или холодных напитков, препятствуя их быстрому остыванию или нагреву. Нельзя использовать в микроволновой печи.',
    material: 'Фарфор',
    color: 'Белый',
    top: 'true',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/29/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/29/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/29/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/29/3.webp',
    ],
  },
  {
    id: 30,
    brand: 'Kuchaland',
    title: 'Стакан, 330 мл, 2 шт',
    price: 2990,
    category: 'Стаканы',
    stock: 28,
    description:
      'Стакан для холодных и горячих напитков, 2 штукию Объём: 330 мл. Материал: термостойкое стекло. ',
    material: 'Стекло',
    color: 'Прозрачный',
    top: 'false',
    thumbnail: 'https://raw.githubusercontent.com/vadim-m/api-fake/img/30/1.webp',
    images: [
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/30/1.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/30/2.webp',
      'https://raw.githubusercontent.com/vadim-m/api-fake/img/30/3.webp',
    ],
  },
];

export default PRODUCTS;
