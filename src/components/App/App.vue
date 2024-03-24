<script setup lang="ts">
import './App.scss';

import Header from '../Header/Header.vue';
import Footer from '../Footer/Footer.vue';
</script>

<template>
  <div class="app">
    <Header class="app__header" />
    <main class="app__container">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
