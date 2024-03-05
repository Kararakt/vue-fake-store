<script setup>
import './HomePage.css';

import { ref, computed } from 'vue';
import { orderBy } from 'lodash';

import { selectArray, radioArray } from '../../utils/constants';
import { products, isActiveLoader } from '../../utils/productHelper';
import router from '../../router/router';

import MyInput from '../../components/UI/MyInput/MyInput.vue';
import MySelect from '../../components/UI/MySelect/MySelect.vue';
import MyRadioButton from '../../components/UI/MyRadioButton/MyRadioButton.vue';
import MyLoader from '../../components/UI/MyLoader/MyLoader.vue';
import MyModal from '../../components/UI/MyModal/MyModal.vue';
import Card from '../../components/Card/Card.vue';
import MyButton from '../../components/UI/MyButton/MyButton.vue';

const selectedSorting = ref('');
const radioSorting = ref('asc');
const search = ref('');
const isActiveModal = ref(false);
const cartPreview = ref({});

const handleClickPreview = (product) => {
  cartPreview.value = product;
  isActiveModal.value = true;
};

const sortedProducts = computed(() =>
  orderBy(
    products.value.filter(
      (item) =>
        item.title.toLowerCase().includes(search.value.toLowerCase()) ||
        item.category.toLowerCase().includes(search.value.toLowerCase())
    ),
    selectedSorting.value,
    radioSorting.value
  )
);

const sortedProductsHasItems = computed(() => sortedProducts.value.length > 0);

const handleCloseModal = () => (isActiveModal.value = false);

const handleClickCart = () => {
  router.push('/Cart');
  isActiveModal.value = false;
};
</script>

<template>
  <section class="home section">
    <h1 class="section__title">Home</h1>
    <MyInput
      v-model="search"
      placeholder="Enter a product name or category"
      name="search"
      class="input_type_text"
    />
    <form name="filter" class="home__filter">
      <div class="home__radio">
        <MyRadioButton
          v-for="radio in radioArray"
          :key="radio.id"
          v-model="radioSorting"
          :id="radio.id"
          name="radio"
          :value="radio.value"
          :label="radio.label"
        />
      </div>
      <MySelect
        v-model="selectedSorting"
        :options="selectArray"
        name="Select"
      />
    </form>
    <div v-if="sortedProductsHasItems" class="section__content">
      <Card
        v-for="product in sortedProducts"
        @preview="handleClickPreview"
        :card="product"
        :key="product.id"
      />
    </div>
    <div
      v-else
      :class="[
        'home__search-error',
        { 'home__search-error_visible': isActiveLoader },
      ]"
    >
      Nothing find for Your request :(
    </div>

    <MyLoader :model-value="isActiveLoader" />

    <MyModal v-model="isActiveModal" @closeModal="handleCloseModal">
      <template #header>
        <div class="modal__header">
          <h3 class="modal__title">Product added to cart</h3>
          <form @submit.prevent="handleClickCart">
            <MyButton type="submit" classCustom="button_type_modal">
              <template #text>Go to cart</template>
            </MyButton>
          </form>
        </div>
      </template>
      <template #content>
        <div class="modal__image-container">
          <img
            :src="cartPreview.item.image"
            :alt="cartPreview.item.title"
            class="modal__image"
          />
          <div class="modal__image-info">
            <h3 class="modal__image-title">{{ cartPreview.item.title }}</h3>
            <span>Quantity - {{ cartPreview.count }}</span>
            <span>Price - ${{ cartPreview.item.price }}</span>
          </div>
        </div>
      </template>
    </MyModal>
  </section>
</template>
