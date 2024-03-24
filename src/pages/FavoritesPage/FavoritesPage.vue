<script setup lang="ts">
import './FavoritesPage.scss';

import { favoritesArray } from '../../utils/constants';

import Card from '../../components/Card/Card.vue';
import MyButton from '../../components/UI/MyButton/MyButton.vue';

const favoritesHasItem = computed(() => favoritesArray.value.length > 0);
</script>

<template>
  <section class="favorites">
    <h1 class="favorites__title">My favorites</h1>
    <div class="favorites__content" v-if="favoritesHasItem">
      <Card v-for="item in favoritesArray" :key="item.id" :card="item" />
    </div>
    <div class="favorites__empty" v-else>
      <span class="favorites__empty-text"
        >There are no items in Your wish list</span
      >
      <MyButton
        @click="$router.push('/')"
        type="button"
        classCustom="favorites__button"
      >
        <template #text>Return to main page</template>
      </MyButton>
    </div>
  </section>
</template>
