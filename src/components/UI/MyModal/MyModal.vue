<script setup>
import './MyModal.css';

import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

const emits = defineEmits(['closeModal', 'update:modelValue']);

const props = defineProps({
  modelValue: Boolean,
});

const modal = ref(null);
const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue) => emits('update:modelValue', newValue),
});

const closeModal = () => emits('closeModal');

const handleCloseByEsc = (event) => {
  if (event.key === 'Escape' && modelUpdate.value) {
    closeModal();
  }
};

const handleCloseByOverlay = (event) => {
  if (event.target === modal.value) {
    closeModal();
  }
};

const addEventListeners = () => {
  document.addEventListener('keydown', handleCloseByEsc);
  document.addEventListener('click', handleCloseByOverlay);
};

const removeEventListeners = () => {
  document.removeEventListener('keydown', handleCloseByEsc);
  document.removeEventListener('click', handleCloseByOverlay);
};

onMounted(addEventListeners);

onUnmounted(removeEventListeners);

watch(modelUpdate, () => {
  document.body.classList.toggle('page_scroll', modelUpdate.value);
});
</script>

<template>
  <Transition name="modal">
    <section v-if="modelUpdate" ref="modal" class="modal">
      <div class="modal__content">
        <font-awesome-icon
          icon="fa-solid fa-x"
          class="modal__close"
          @click="closeModal"
        />
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    </section>
  </Transition>
</template>
