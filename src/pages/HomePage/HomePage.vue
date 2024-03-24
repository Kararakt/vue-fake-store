<script setup lang="ts">
import './HomePage.scss';

import orderBy from 'lodash/orderBy';
import router from '../../router/router';

import { CounterItems, Products } from '../../models/models';
import { selectArray, radioArray, checkboxArray } from '../../utils/constants';
import { products, isActiveLoader } from '../../utils/productHelper';

import MyInput from '../../components/UI/MyInput/MyInput.vue';
import MySelect from '../../components/UI/MySelect/MySelect.vue';
import MyRadioButton from '../../components/UI/MyRadioButton/MyRadioButton.vue';
import MyLoader from '../../components/UI/MyLoader/MyLoader.vue';
import MyModal from '../../components/UI/MyModal/MyModal.vue';
import Card from '../../components/Card/Card.vue';
import MyButton from '../../components/UI/MyButton/MyButton.vue';
import MyCheckBox from '../../components/UI/MyCheckBox/MyCheckBox.vue';

const selectedSorting = ref<string>('');
const radioSorting = ref<'asc' | 'desc'>('asc');
const checkboxSorting = ref<string[]>([]);

const search = ref<string>('');

const isActiveModal = ref<boolean>(false);

const cartPreview = ref<CounterItems<Products>>({
  count: 0,
  item: products.value[0],
});

const handleClickPreview = (product: CounterItems<Products>) => {
  cartPreview.value = product;
  isActiveModal.value = true;
};

const sortedProducts = computed(() =>
  orderBy(
    products.value.filter(
      (item) =>
        item.title.toLowerCase().includes(search.value.toLowerCase()) &&
        (checkboxSorting.value.length > 0
          ? checkboxSorting.value.includes(item.category)
          : item)
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
  <section class="home">
    <h1 class="home__title">Home</h1>
    <MyInput
      v-model="search"
      type="text"
      placeholder="Enter a product name"
      name="search"
      class="home__input"
    />
    <form name="filter" class="home__filter">
      <div class="home__filter-container">
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
      </div>
      <div class="home__checkbox">
        <MyCheckBox
          v-model="checkboxSorting"
          v-for="item in checkboxArray"
          :key="item.id"
          :id="item.id"
          :value="item.id"
          :name="item.label"
          :label="item.label"
        />
      </div>
    </form>
    <div v-if="sortedProductsHasItems" class="home__content">
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

    <MyLoader v-model="isActiveLoader" />

    <MyModal v-model="isActiveModal" @closeModal="handleCloseModal">
      <template #header>
        <div class="modal__header">
          <h3 class="modal__title">Product added to cart</h3>
          <form @submit.prevent="handleClickCart">
            <MyButton type="submit" classCustom="modal__button">
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
