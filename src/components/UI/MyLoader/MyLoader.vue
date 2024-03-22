<script setup lang="ts">
import './MyLoader.css';

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();

const props = defineProps<{ modelValue: boolean }>();

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue: boolean) => emit('update:modelValue', newValue),
});
</script>

<template>
  <div v-if="modelUpdate" class="loader"></div>
</template>
