import { ref } from 'vue';

export const cartProducts = ref([]);

export const navItems = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'Products',
    to: '/Products',
  },
  {
    id: 3,
    name: 'Favorites',
    to: '/Favorites',
  },
];

export const selectArray = [
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

export const tabsTitle = [
  {
    id: 1,
    title: `Men's Clothing`,
    category: `men's clothing`,
  },
  {
    id: 2,
    title: `Women's Clothing`,
    category: `women's clothing`,
  },
  {
    id: 3,
    title: 'Jewelry',
    category: 'jewelery',
  },
  {
    id: 4,
    title: 'Electronics',
    category: 'electronics',
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
