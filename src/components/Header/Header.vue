<script setup lang="ts">
import './Header.scss';

import { navItems, cartProducts, iconBar } from '../../utils/constants';

const menuActive = ref<boolean>(false);

const menu = ref<Element | null>(null);

const handleToggleMenu = () => (menuActive.value = !menuActive.value);

const handleCloseMenu = () => {
  if (menuActive.value) {
    menuActive.value = false;
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (event.target === menu.value) {
    handleCloseMenu();
    console.log('Close');
  }
};

const handleResize = () => {
  if (window.innerWidth > 468 && menuActive.value) {
    handleCloseMenu();
  }
};

const addEventListener = () => {
  document.addEventListener('click', handleClickOutside);

  window.addEventListener('resize', handleResize);
};

const removeEventListener = () => {
  document.removeEventListener('click', handleClickOutside);

  window.removeEventListener('resize', handleResize);
};

onMounted(addEventListener);

onUnmounted(removeEventListener);

watch(menuActive, () => {
  document.body.style.overflowY = menuActive.value ? 'hidden' : 'auto';
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
            @click="handleCloseMenu"
          >
            {{ link.name }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/Cart"
            class="header__link"
            active-class="header__link_active"
            @click="handleCloseMenu"
          >
            Cart<sup class="header__cart-count">
              {{ cartProducts.length }}
            </sup>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div
      @click="handleToggleMenu"
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
