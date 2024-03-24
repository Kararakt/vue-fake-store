<script setup lang="ts">
import './MyInput.scss';

interface Props {
  type: string;
  modelValue: string | string[];
  placeholder?: string;
  name: string;
  id?: string;
}

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | string[]): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  id: '',
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
    :id="id"
    autocomplete="off"
    class="input"
  />
</template>
