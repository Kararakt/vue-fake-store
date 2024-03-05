import { ref, computed } from 'vue';

export const favoritesArray = ref([]);

export const favoritesHasItem = computed(() => favoritesArray.value.length > 0);

export const addItemToFavorites = (item) => {
  favoritesArray.value.push(item);
};

export const hasActiveHeart = (item) => {
  const favoritesItem = favoritesArray.value.find((el) => el.id === item.id);
  return favoritesItem != null ? true : false;
};

export const removeItemFromFavorites = (item) => {
  const element = favoritesArray.value.find((el) => el.id === item.id);
  if (element) {
    const index = favoritesArray.value.indexOf(element);
    favoritesArray.value.splice(index, 1);
  }
};
