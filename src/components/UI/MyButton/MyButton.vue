<script setup lang="ts">
import './MyButton.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  classCustom?: string;
}

const emit = defineEmits<{ (event: 'click'): void }>();

withDefaults(defineProps<Props>(), {
  disabled: false,
  customClass: '',
});

const handleClickButton = () => emit('click');
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['button', classCustom]"
    @click="handleClickButton"
  >
    <slot name="text"></slot>
  </button>
</template>
