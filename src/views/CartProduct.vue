<template>
  <div class="cart-page container py-5">
    <h1 class="mb-4">Shopping Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart text-center py-5">
      <i class="bi bi-cart-x fs-1 text-muted"></i>
      <p class="fs-4 mt-3">Shopping Cart Empty</p>
      <router-link to="/" class="btn btn-primary mt-3"> HOME </router-link>
    </div>

    <div v-else>
      <div class="row">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-body">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="cart-item row mb-3 align-items-center"
              >
                <div class="col-md-2">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="col-md-4">
                  <h5 class="mb-1">{{ item.title }}</h5>
                  <p class="text-success mb-1">${{ item.price }}</p>
                </div>
                <div class="col-md-3">
                  <div class="input-group">
                    <button
                      class="btn btn-outline-secondary"
                      @click="updateItemQuantity(item.id, item.quantity - 1)"
                      :disabled="item.quantity <= 1"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      class="form-control text-center"
                      v-model.number="item.quantity"
                      @change="updateItemQuantity(item.id, item.quantity)"
                      min="1"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      @click="updateItemQuantity(item.id, item.quantity + 1)"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="col-md-2 text-end">
                  <p class="mb-0">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
                <div class="col-md-1 text-end">
                  <button
                    class="btn btn-danger btn-sm"
                    @click="removeItem(item.id)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">ORDER</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span> NUMBER OF PRODUCT:</span>
                <span>{{ cartItemCount }}</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>TOTAL:</span>
                <span class="fw-bold">${{ cartTotal.toFixed(2) }}</span>
              </div>
              <button class="btn btn-primary w-100" @click="checkout">
                COMPLETE YOUR PURCHASE
              </button>
              <router-link to="/" class="btn btn-outline-secondary w-100 mt-2">
                CONTINUE SHOPPING
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/store/cart.js";
import { computed } from "vue";

export default {
  name: "ShoppingCart",
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.items);
    const cartTotal = computed(() => cartStore.total);
    const cartItemCount = computed(() => cartStore.itemCount);

    const removeItem = (productId) => {
      cartStore.removeFromCart(productId);
    };

    const updateItemQuantity = (productId, quantity) => {
      cartStore.updateQuantity(productId, quantity);
    };

    const checkout = () => {
      alert(`تم إتمام الطلب بنجاح! المجموع: $${cartTotal.value.toFixed(2)}`);
      cartStore.items = [];
    };

    return {
      cartItems,
      cartTotal,
      cartItemCount,
      removeItem,
      updateItemQuantity,
      checkout,
    };
  },
};
</script>

<style scoped>
.cart-page {
  min-height: 70vh;
}

.cart-item {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item:last-child {
  border-bottom: none;
}

.empty-cart {
  background-color: #f8f9fa;
  border-radius: 10px;
}

.input-group input {
  max-width: 60px;
}

.img-fluid {
  max-height: 80px;
  object-fit: contain;
}
.btn-primary {
  color: black;
  background-color: #f5f5dc;
  border: 2px solid #ffffff;
}
</style>
