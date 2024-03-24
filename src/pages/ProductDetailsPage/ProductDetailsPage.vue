<script setup lang="ts">
import './ProductDetailsPage.scss';

import { cartProducts } from '../../utils/constants';
import { products } from '../../utils/productHelper';
import { CounterItems, Products } from '../../models/models';

import MyButton from '../../components/UI/MyButton/MyButton.vue';

const router = useRoute();
const id = router.params.id;

const product = computed(
  () => products.value.filter((item) => item.id === +id)[0]
);

const updateCart = (product: CounterItems<Products>, count: number) => {
  product.count += count;
};

const addItemToBasket = (item: Products, count: number) => {
  const productInCart = cartProducts.value.find(
    (product) => item.id === product.item.id
  );

  productInCart && productInCart.count < 25
    ? updateCart(productInCart, count)
    : cartProducts.value.push({ item, count });
};
</script>

<template>
  <section class="details">
    <h1 class="details__title">{{ product.title }}</h1>
    <div class="details__container">
      <img :src="product.image" :alt="product.title" class="details__image" />
      <div class="details__info">
        <p class="details__description">{{ product.description }}</p>
        <p class="details__category">Category: {{ product.category }}</p>
        <span class="details__price">{{ product.price }}$</span>
        <form @submit.prevent="addItemToBasket(product, 1)">
          <MyButton type="submit" class-custom="details__button">
            <template #text>Add to cart</template>
          </MyButton>
        </form>
      </div>
    </div>
  </section>
</template>
