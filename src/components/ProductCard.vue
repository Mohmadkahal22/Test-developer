<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex">
    <div
      class="special-offer-item p-3 border rounded d-flex flex-column"
      style="height: 330px; width: 100%"
    >
      <div class="product-image-container mb-3" style="height: 200px">
        <img
          :src="product.image || 'https://via.placeholder.com/300'"
          class="img-fluid w-100 h-100 object-fit-cover"
          :alt="product.title"
        />
      </div>

      <div class="text-muted mb-2 flex-grow-1" style="min-height: 40px">
        {{ product.title || "Lorem ipsum dolor" }}
      </div>

      <div class="d-flex align-items-center mb-3">
        <span class="text-decoration-line-through text-muted me-2">
          AED {{ ((product.price || 899) * 1.1).toFixed(2) }}
        </span>
        <span class="fw-bold text-danger">
          AED {{ (product.price || 800).toFixed(2) }}
        </span>
      </div>

      <router-link
        :to="'/product/' + product.id"
        class="btn btn-primary mt-auto w-100 py-2 text-black"
        style="border-radius: 4px"
      >
        View Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.special-offer-item {
  transition: all 0.3s ease;
}
.special-offer-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.btn-primary {
  transition: all 0.3s ease;
  background-color: #f5f5dc;
  border: 2px solid #ffffff;
}
.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>
