<script setup>
import './ProductDetailsPage.css';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

import { products } from '../../utils/productHelper';

import ProductDetails from '../../components/ProductDetails/ProductDetails.vue';

const router = useRoute();
const id = router.params.id;

const product = computed(
  () => products.value.filter((item) => item.id === +id)[0]
);
</script>

<template>
  <ProductDetails :item="product" v-if="product != null" />
</template>
