<script setup>
import './MyButton.css';

const emit = defineEmits(['click']);

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  classCustom: {
    type: [String, Array],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
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
