<template>
  <div class="category-page">
    <!-- Header Section -->
    <div class="bg-dark text-white p-4 mb-4">
      <h1>{{ categoryName }}</h1>
    </div>

    <!-- Products Grid -->
    <div class="container">
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "@/components/ProductCard.vue";
import api from "@/api/api";

export default {
  name: "CategoryPage",
  setup() {
    const route = useRoute();
    const categoryName = ref("");
    const products = ref([]);
    const isLoading = ref(true);

    const getCategoryName = (id) => {
      const categories = {
        electronics: "Electronics",
        jewelery: "Jewelry",
      };
      return categories[id] || id;
    };
    onMounted(async () => {
      try {
        const categoryId = route.params.id;
        categoryName.value = getCategoryName(categoryId);
        products.value = await api.getCategoryProducts(categoryId);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        isLoading.value = false;
      }
    });

    return { categoryName, products, isLoading };
  },
  components: { ProductCard },
};
</script>

<style scoped>
.category-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
