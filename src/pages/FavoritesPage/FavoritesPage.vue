<script setup>
import './FavoritesPage.css';

import { favoritesArray, favoritesHasItem } from '../../utils/favoritesHelper';

import Card from '../../components/Card/Card.vue';
import MyButton from '../../components/UI/MyButton/MyButton.vue';
</script>

<template>
  <section class="favorites section">
    <h1 class="section__title">My favorites</h1>
    <div class="section__content" v-if="favoritesHasItem">
      <Card v-for="item in favoritesArray" :key="item.id" :card="item" />
    </div>
    <div class="favorites__empty" v-else>
      <span class="favorites__empty-text"
        >There are no items in Your wish list</span
      >
      <MyButton
        @click="$router.push('/')"
        type="button"
        class-custom="favorites__button"
      >
        <template #text>Return to main page</template>
      </MyButton>
    </div>
  </section>
</template>
