<template>
  <div class="container my-5 animate__animated animate__fadeIn">
    <div class="row g-4">
      <div class="col-md-6">
        <div class="product-image-container p-3 bg-white rounded shadow-sm">
          <img
            :src="product.image || 'https://via.placeholder.com/600'"
            class="img-fluid rounded w-100"
            :alt="product.title"
            style="max-height: 500px; object-fit: contain"
          />
        </div>
      </div>

      <!-- تفاصيل المنتج -->
      <div class="col-md-6">
        <div class="product-details p-4 bg-white rounded shadow-sm h-100">
          <h2 class="mb-3 fw-bold">{{ product.title }}</h2>

          <div class="d-flex align-items-center mb-4">
            <span class="display-6 fw-bold text-primary me-3"
              >${{ product.price }}</span
            >
            <span class="badge bg-success fs-6">In Stock</span>
          </div>

          <p class="text-muted mb-4">{{ product.description }}</p>

          <div class="d-flex gap-3 mb-4">
            <button @click="addToCart" class="btn flex-grow-1 cart-btn">
              Add to Cart
            </button>
          </div>

          <div class="product-meta">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-star-fill text-warning me-2"></i>
              <span
                >{{ product.rating?.rate || 4.5 }} ({{
                  product.rating?.count || 120
                }}
                reviews)</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useCartStore } from "@/store/cart";
import "animate.css";

export default {
  setup() {
    const route = useRoute();
    const product = ref({});
    const cartStore = useCartStore();

    onMounted(async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${route.params.id}`
        );
        product.value = response.data;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    });

    const addToCart = () => {
      cartStore.addToCart(product.value);
      const btn = document.querySelector(".cart-btn");
      btn.classList.add("animate__animated", "animate__pulse");
      setTimeout(() => {
        btn.classList.remove("animate__animated", "animate__pulse");
      }, 1000);
    };

    return { product, addToCart };
  },
};
</script>

<style scoped>
.product-image-container {
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.product-image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-details {
  border: 1px solid #eee;
}

.quantity-selector {
  background-color: #f8f9fa;
}

.cart-btn {
  background-color: #f5f5dc;
  border: 2px solid #ffffff;
  color: #333;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 10px 20px;
}

.cart-btn:hover {
  background-color: #e8e8d0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.badge {
  padding: 5px 10px;
  border-radius: 4px;
}
</style>
