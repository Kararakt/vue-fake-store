<script setup lang="ts">
import './MyCheckBox.scss';

import MyInput from '../MyInput/MyInput.vue';

interface Props {
  name: string;
  id: string;
  modelValue: string[];
  value: string;
  label: string;
}

const emit = defineEmits<{
  (event: 'update:modelValue', value: string[]): void;
}>();

const props = defineProps<Props>();

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
});
</script>

<template>
  <div class="checkbox">
    <MyInput
      v-model="modelUpdate"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      class="checkbox__input"
    />
    <label :for="id" class="checkbox__label">{{ label }}</label>
  </div>
</template>
