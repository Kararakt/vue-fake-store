<script setup>
import './MySelect.css';

import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
});

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
});
</script>

<template>
  <div class="select__container">
    <select v-model="modelUpdate" :name="name" class="select">
      <option value="" disabled>Choose filter</option>
      <option v-for="option in options" :key="option.id" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
