<script setup>
import './CartBlock.css';

import { computed } from 'vue';

import MyButton from '../UI/MyButton/MyButton.vue';

const emits = defineEmits(['increaseCount', 'decreaseCount', 'removeProduct']);

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const productTotal = computed(
  () => +(props.item.price * props.count).toFixed(2)
);
</script>

<template>
  <div class="cart-block" v-if="props">
    <div class="cart-block__name">
      <img
        :src="item.image"
        :alt="item.title"
        @click="$router.push(`/Product/${item.id}`)"
        class="cart-block__image"
      />
      <h3 class="cart-block__title">{{ item.title }}</h3>
    </div>
    <p class="cart-block__price">${{ productTotal }}</p>
    <div class="cart-block__buttons">
      <MyButton
        :class="[
          'cart-block__button',
          count === 1 ? 'cart-block__button_disabled' : '',
        ]"
        type="button"
        :disabled="count === 1"
        @click="emits('decreaseCount', count)"
      >
        <template #text>-</template>
      </MyButton>
      <span>{{ count }}</span>
      <MyButton
        :class="[
          'cart-block__button',
          count === 20 ? 'cart-block__button_disabled' : '',
        ]"
        type="button"
        :disabled="count === 20"
        @click="emits('increaseCount', count)"
      >
        <template #text>+</template>
      </MyButton>
    </div>
    <font-awesome-icon
      icon="fa-solid fa-trash"
      class="cart-block__delete"
      @click="emits('removeProduct', props)"
    />
  </div>
</template>
