import { ref } from 'vue';

import { Api } from './api';

const api = new Api({
  baseUrl: 'https://fakestoreapi.com/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const products = ref([]);
export const isActiveLoader = ref(false);

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
