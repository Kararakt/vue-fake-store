<script setup>
import './Card.css';

import { computed } from 'vue';

import { cartProducts } from '../../utils/constants';
import {
  addItemToFavorites,
  removeItemFromFavorites,
  hasActiveHeart,
} from '../../utils/favoritesHelper';

import MyButton from '../UI/MyButton/MyButton.vue';

const emit = defineEmits(['preview']);

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const addItemToCart = (item, count) => {
  cartProducts.value.push({ item, count: count });
  emit('preview', { item, count });
};

const isOrdered = computed(() => {
  return cartProducts.value.some(
    (product) => product.item.id === props.card.id
  );
});

const heartActive = computed(() => {
  return props.card && hasActiveHeart(props.card);
});

const toggleHeartStatus = () => {
  if (heartActive.value) {
    removeItemFromFavorites(props.card);
  } else {
    addItemToFavorites(props.card);
  }
};
</script>

<template>
  <div class="card" v-if="card">
    <div class="card__container">
      <img
        :src="card.image"
        :alt="card.title"
        @click="$router.push(`/Product/${card.id}`)"
        class="card__image"
      />
      <p class="card__category">{{ card.category }}</p>
      <h3 class="card__title">{{ card.title }}</h3>
      <div class="card__rating">
        <i class="card__star">&#9733;</i>
        <span class="card__rate">{{ card.rating.rate }}</span>
      </div>
      <div class="card__wrapper">
        <span class="card__price">${{ card.price }}</span>
        <font-awesome-icon
          @click="toggleHeartStatus()"
          icon="fa-solid fa-heart"
          :class="['card__heart', { card__heart_active: heartActive }]"
        />
      </div>
      <form @submit.prevent="addItemToCart(card, 1)">
        <MyButton
          type="submit"
          :disabled="isOrdered"
          classCustom="button_type_card"
        >
          <template #text>
            {{ !isOrdered ? 'Add to cart' : 'Already in cart' }}
          </template>
        </MyButton>
      </form>
    </div>
  </div>
</template>
