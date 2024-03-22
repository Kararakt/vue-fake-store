<script setup lang="ts">
import './Card.css';

import { CounterItems, Products } from '../../models/models';
import { favoritesArray, cartProducts } from '../../utils/constants';

import MyButton from '../UI/MyButton/MyButton.vue';

const emit = defineEmits<{
  (event: 'preview', item: CounterItems<Products>): void;
}>();

const props = defineProps<{ card: Products }>();

// Логика добавления в корзину

const handleAddToCart = (item: Products, count: number) => {
  const newItem = { item, count };
  cartProducts.value.push(newItem);
  emit('preview', newItem);
};

const isOrdered = computed(() => {
  return cartProducts.value.some(
    (product) => product.item.id === props.card.id
  );
});

// Логика добавления в избранное

const handleAddToFavorites = (item: Products) => {
  favoritesArray.value.push(item);
};

const isHeart = (item: Products) => {
  const favoritesItem = favoritesArray.value.find((el) => el.id === item.id);
  return favoritesItem != null ? true : false;
};

const handleRemoveIFromFavorites = (item: Products) => {
  const element = favoritesArray.value.find((el) => el.id === item.id);
  if (element) {
    const index = favoritesArray.value.indexOf(element);
    favoritesArray.value.splice(index, 1);
  }
};

const heartActive = computed(() => {
  return props.card && isHeart(props.card);
});

const handleToggleHeart = () => {
  if (heartActive.value) {
    handleRemoveIFromFavorites(props.card);
  } else {
    handleAddToFavorites(props.card);
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
          @click="handleToggleHeart"
          icon="fa-solid fa-heart"
          :class="['card__heart', { card__heart_active: heartActive }]"
        />
      </div>
      <form @submit.prevent="handleAddToCart(card, 1)">
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
