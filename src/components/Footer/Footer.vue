<script setup>
import './Footer.css';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    &copy; {{ currentYear }} Flowbase. Powered by Webflow
  </footer>
</template>
