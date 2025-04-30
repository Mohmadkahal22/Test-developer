<template>
  <div class="pagination-container mt-5">
    <div class="d-flex justify-content-center">
      <div class="pagination-line">
        <div
          v-for="page in totalPages"
          :key="page"
          class="pagination-item"
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  emits: ["page-changed"],
  methods: {
    changePage(page) {
      this.$emit("page-changed", page);
    },
  },
};
</script>

<style scoped>
.pagination-line {
  display: flex;
  gap: 15px;
  align-items: center;
}

.pagination-item {
  width: 50px;
  height: 4px;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-item.active {
  background-color: #000;
  width: 70px;
  height: 6px;
}
</style>
