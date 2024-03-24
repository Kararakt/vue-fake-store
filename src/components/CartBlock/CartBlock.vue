<script setup lang="ts">
import './CartBlock.scss';

import { Products, CounterItems } from '../../models/models';

import MyButton from '../UI/MyButton/MyButton.vue';

const emits = defineEmits<{
  (event: 'increaseCount', count: number): void;
  (event: 'decreaseCount', count: number): void;
  (event: 'removeProduct', item: CounterItems<Products>): void;
}>();

const props = defineProps<{ item: CounterItems<Products> }>();

const productTotal = computed(
  () => +(props.item.item.price * props.item.count).toFixed(2)
);
</script>

<template>
  <div class="cart-block" v-if="props">
    <div class="cart-block__name">
      <img
        :src="item.item.image"
        :alt="item.item.title"
        @click="$router.push(`/Product/${item.item.id}`)"
        class="cart-block__image"
      />
      <h3 class="cart-block__title">{{ item.item.title }}</h3>
    </div>
    <p class="cart-block__price">${{ productTotal }}</p>
    <div class="cart-block__buttons">
      <MyButton
        :class="[
          'cart-block__button',
          item.count === 1 ? 'cart-block__button_disabled' : '',
        ]"
        type="button"
        :disabled="item.count === 1"
        @click="emits('decreaseCount', item.count)"
      >
        <template #text>-</template>
      </MyButton>
      <span>{{ item.count }}</span>
      <MyButton
        :class="[
          'cart-block__button',
          item.count === 20 ? 'cart-block__button_disabled' : '',
        ]"
        type="button"
        :disabled="item.count === 20"
        @click="emits('increaseCount', item.count)"
      >
        <template #text>+</template>
      </MyButton>
    </div>
    <font-awesome-icon
      icon="fa-solid fa-trash"
      class="cart-block__delete"
      @click="emits('removeProduct', item)"
    />
  </div>
</template>
