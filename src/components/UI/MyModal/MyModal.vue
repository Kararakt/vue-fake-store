<script setup lang="ts">
import './MyModal.css';

const emits = defineEmits<{
  (event: 'closeModal'): void;
  (event: 'update:modelValue', value: boolean): void;
}>();

const props = defineProps<{ modelValue: boolean }>();

const modal = ref<Element | null>(null);

const modelUpdate = computed({
  get: () => props.modelValue,
  set: (newValue: boolean) => emits('update:modelValue', newValue),
});

const closeModal = () => emits('closeModal');

const handleCloseByEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && modelUpdate.value) {
    closeModal();
  }
};

const handleCloseByOverlay = (event: Event) => {
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
  document.body.style.overflowY = modelUpdate.value ? 'hidden' : 'auto';
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
