<script setup>
import './MyInput.css';

import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
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
  <input
    v-model="modelUpdate"
    :placeholder="placeholder"
    :type="type"
    :name="name"
    autocomplete="off"
    class="input"
  />
</template>
