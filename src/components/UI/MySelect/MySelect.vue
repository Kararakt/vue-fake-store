<script setup lang="ts">
import './MySelect.scss';

import { selectArray } from '../../../utils/constants';

interface Props {
  modelValue: string;
  options: typeof selectArray;
  name: string;
}

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const props = defineProps<Props>();

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue: string) => emit('update:modelValue', newValue),
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
