import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const addToCart = (product) => {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId) => {
    items.value = items.value.filter((item) => item.id !== productId);
  };

  const updateQuantity = (productId, newQuantity) => {
    const item = items.value.find((item) => item.id === productId);
    if (item) {
      item.quantity = newQuantity > 0 ? newQuantity : 1;
    }
  };

  const total = computed(() => {
    return items.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  });

  const itemCount = computed(() => {
    return items.value.reduce((count, item) => count + item.quantity, 0);
  });

  return { items, addToCart, removeFromCart, updateQuantity, total, itemCount };
});
