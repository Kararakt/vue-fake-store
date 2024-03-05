<script setup>
import './Header.css';

import { ref, onMounted, onUnmounted } from 'vue';

import { navItems, cartProducts, iconBar } from '../../utils/constants';

const menuActive = ref(false);

const menu = ref(null);
const btn = ref(null);

const handleClickIcon = () => (menuActive.value = !menuActive.value);

const handleClickOutside = (event) => {
  if (
    event.target !== menu.value &&
    !btn.value.contains(event.target) &&
    menuActive.value
  ) {
    menuActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header class="header">
    <div class="header__container">
      <img src="/logoFirst.svg" class="header__logo header__logo_type_black" />
      <img src="/logoSecond.svg" class="header__logo header__logo_type_white" />
    </div>
    <nav
      ref="menu"
      :class="['header__menu', { header__menu_active: menuActive }]"
    >
      <ul class="header__links">
        <li v-for="link in navItems" :key="link.id">
          <RouterLink
            :to="link.to"
            class="header__link"
            active-class="header__link_active"
          >
            {{ link.name }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/Cart"
            class="header__link"
            active-class="header__link_active"
          >
            Cart<sup class="header__cart-count">
              {{ cartProducts.length }}
            </sup>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div
      @click="handleClickIcon"
      ref="btn"
      :class="['header__menu-icon', { 'header__menu-icon_active': menuActive }]"
    >
      <div
        v-for="bar in iconBar"
        :key="bar.id"
        :class="`header__bar-icon ${bar.class}`"
      ></div>
    </div>
  </header>
</template>
