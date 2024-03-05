<script setup>
import './CartPage.css';

import { computed } from 'vue';
import { sumBy } from 'lodash';

import { cartProducts } from '../../utils/constants';
import router from '../../router';

import MyButton from '../../components/UI/MyButton/MyButton.vue';
import CartBlock from '../../components/CartBlock/CartBlock.vue';

const cartProductsHasItems = computed(() => cartProducts.value.length > 0);

const cartProductsCount = computed(() =>
  cartProducts.value.reduce((acc, next) => acc + next.count, 0)
);

const total = computed(
  () =>
    +sumBy(cartProducts.value, (item) => item.count * item.item.price).toFixed(
      2
    )
);

const removeProduct = (item) => {
  const index = cartProducts.value.indexOf(item);

  if (index > -1) {
    cartProducts.value.splice(index, 1);
  }
};

const clearCart = () => (cartProducts.value.length = 0);

const checkout = () => {
  clearCart();
  router.push('/');
};
</script>

<template>
  <section class="cart section">
    <h1 class="section__title">Cart</h1>
    <div v-if="cartProductsHasItems">
      <div class="cart__info">
        <p class="cart__count">Item Quantity: {{ cartProductsCount }}</p>
        <MyButton type="button" class-custom="cart__button" @click="clearCart">
          <template #text>Clear Cart</template>
        </MyButton>
      </div>
      <div class="cart__items">
        <CartBlock
          v-for="cart in cartProducts"
          :item="cart.item"
          :count="cart.count"
          @increase-count="() => (cart.count += 1)"
          @decrease-count="() => (cart.count -= 1)"
          @remove-product="removeProduct(cart)"
        />
      </div>
      <div class="cart__total">
        <span class="cart__cost">Total cost: ${{ total }}</span>
        <MyButton type="button" @click="checkout" class-custom="cart__button"
          ><template #text>Check out</template></MyButton
        >
      </div>
    </div>

    <div v-else class="cart__empty">
      <p class="cart__empty-message">There are no items in the cart</p>
      <form>
        <MyButton
          class-custom="cart__button"
          type="button"
          @click="$router.push('/')"
        >
          <template #text>Return to shopping</template>
        </MyButton>
      </form>
    </div>
  </section>
</template>
