import { CounterItems, Products, OptionsSelect } from '../models/models';

export const cartProducts = ref<CounterItems<Products>[]>([]);
export const favoritesArray = ref<Products[]>([]);

export const navItems = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'Favorites',
    to: '/Favorites',
  },
];

export const selectArray: OptionsSelect[] = [
  {
    id: 1,
    name: 'Product Name',
    value: 'title',
  },
  {
    id: 2,
    name: 'Product Price',
    value: 'price',
  },
  {
    id: 3,
    name: 'Product Category',
    value: 'category',
  },
  {
    id: 4,
    name: 'Product Rating',
    value: 'rating.rate',
  },
];

export const radioArray = [
  {
    id: '1',
    label: 'Ascending',
    value: 'asc',
  },
  {
    id: '2',
    label: 'Descending',
    value: 'desc',
  },
];

export const checkboxArray = [
  {
    id: `men's clothing`,
    label: `Men's clothing`,
  },
  {
    id: `jewelery`,
    label: 'Jewelry',
  },
  {
    id: 'electronics',
    label: 'Electronics',
  },
  {
    id: `women's clothing`,
    label: `Women's clothing`,
  },
];

export const iconBar = [
  {
    id: 1,
    class: 'header__bar-icon_type_top',
  },
  {
    id: 2,
    class: 'header__bar-icon_type_middle',
  },
  {
    id: 3,
    class: 'header__bar-icon_type_bottom',
  },
];
