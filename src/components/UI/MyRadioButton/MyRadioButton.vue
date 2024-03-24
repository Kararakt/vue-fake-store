<script setup lang="ts">
import './MyRadioButton.scss';

import MyInput from '../MyInput/MyInput.vue';

interface Props {
  name: string;
  id: string;
  modelValue: string;
  value: string;
  label: string;
}

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const props = defineProps<Props>();

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
});
</script>

<template>
  <div class="radio">
    <MyInput
      v-model="modelUpdate"
      type="radio"
      :value="value"
      :name="name"
      :id="id"
      class="radio__input"
    />
    <label :for="id" class="radio__label">{{ label }}</label>
  </div>
</template>
