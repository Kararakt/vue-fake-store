<script setup>
import './MyRadioButton.css';

import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
});

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
});
</script>

<template>
  <div class="radio">
    <input
      v-model="modelUpdate"
      type="radio"
      class="radio__input"
      :value="value"
      :name="name"
      :id="id"
    />
    <label :for="id" class="radio__label">{{ label }}</label>
  </div>
</template>
