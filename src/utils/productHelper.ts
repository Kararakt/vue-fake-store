import { Products } from './../models/models';
import { Api } from './api';

const api = new Api(
  'https://fakestoreapi.com/products',
  new Headers({
    'Content-Type': 'application/json',
  })
);

export const products = ref<Products[]>([]);
export const isActiveLoader = ref<boolean>(false);

const getProducts = async () => {
  isActiveLoader.value = true;
  api
    .getProducts()
    .then((card) => {
      products.value = card;
      isActiveLoader.value = false;
    })
    .catch((err) => {
      console.error('Error to get products array', err);
    });
};

getProducts();
