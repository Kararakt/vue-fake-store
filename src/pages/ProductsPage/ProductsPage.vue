<script setup>
import './ProductsPage.css';

import { ref, computed } from 'vue';

import { tabsTitle } from '../../utils/constants';
import { products } from '../../utils/productHelper';

import Card from '../../components/Card/Card.vue';

const currentTab = ref(`men's clothing`);

const filterByType = computed(() =>
  products.value.filter((item) => item.category === currentTab.value)
);

const handleTabClick = (tab) => {
  currentTab.value = tab;
};
</script>

<template>
  <section class="products section">
    <h1 class="section__title">Products</h1>
    <div class="products__container">
      <div class="products__tab">
        <span
          v-for="tab in tabsTitle"
          :key="tab.id"
          :class="[
            'products__tab-title',
            {
              'products__tab-title_active': currentTab === tab.category,
            },
          ]"
          @click="handleTabClick(tab.category)"
          >{{ tab.title }}</span
        >
      </div>
      <div class="section__content">
        <Card v-for="card in filterByType" :card="card" />
      </div>
    </div>
  </section>
</template>
