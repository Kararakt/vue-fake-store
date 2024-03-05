<script setup>
import './ProductDetails.css';

import { cartProducts } from '../../utils/constants';

import MyButton from '../UI/MyButton/MyButton.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const updateCart = (product, count) => {
  product.count += count;
};

const addItemToBasket = (item, count) => {
  const productInCart = cartProducts.value.find(
    (product) => item.id === product.item.id
  );

  productInCart && productInCart.count < 25
    ? updateCart(productInCart, count)
    : cartProducts.value.push({ item, count });
};
</script>

<template>
  <section class="details section" v-if="item">
    <h1 class="section__title">{{ item.title }}</h1>
    <div class="details__container">
      <img :src="item.image" :alt="item.title" class="details__image" />
      <div class="details__info">
        <p class="details__description">{{ item.description }}</p>
        <p class="details__category">Category: {{ item.category }}</p>
        <span class="details__price">{{ item.price }}$</span>
        <form @submit.prevent="addItemToBasket(item, 1)">
          <MyButton type="submit" class-custom="details__button">
            <template #text>Add to cart</template>
          </MyButton>
        </form>
      </div>
    </div>
  </section>
</template>
