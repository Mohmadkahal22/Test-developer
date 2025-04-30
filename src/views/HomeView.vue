<template>
  <div class="main">
    <section
      class="sale-banner position-relative text-black p-6"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4 ps-0 text-start">
            <h1 class="display-4">SALE</h1>
            <br />

            <p class="lead" style="font-size: 19px">
              ACCESS A LIMITED SELECTION
            </p>
            <p class="lead" style="font-size: 19px">WITH 10 TO 20% OFF</p>
            <br />

            <button class="btn border-0 bg-transparent position-relative p-0">
              <img
                src="@/assets/icon/Bottun.png"
                alt="SHOP NOW"
                class="img-fluid d-block"
                style="max-height: 80px"
              />
              <span
                class="position-absolute top-50 start-25 translate-middle-y text-white fs-5 fw-bold"
              >
                SHOP NOW
              </span>
            </button>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </section>
    <div data-aos="fade-up" data-aos-duration="1200" class="col-12 mt-5">
      <div class="d-flex justify-content-center">
        <div class="pagination-line">
          <div class="pagination-item active"></div>
          <div class="pagination-item"></div>
          <div class="pagination-item"></div>
          <div class="pagination-item"></div>
        </div>
      </div>
    </div>
    <section
      class="jewlery my-5 py-4 position-relative"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div class="container h-100">
        <div class="row h-100">
          <div
            class="col-md-2 position-absolute text-start"
            style="bottom: 60px"
          >
            <router-link to="/category/jewelery">
              <button class="btn border-0 bg-transparent position-relative p-0">
                <img
                  src="@/assets/icon/BottunWhite.png"
                  alt="SHOP NOW"
                  class="img-fluid d-block"
                  style="max-height: 80px"
                />
                <span
                  class="position-absolute top-50 start-25 translate-middle-y text-black fs-5 fw-bold"
                >
                  SEE MORE
                </span>
              </button>
            </router-link>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </section>
    <section
      class="container my-5 py-4"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold mb-0 text-black">SPECIAL OFFERS</h2>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else class="row g-4">
        <ProductCard
          v-for="product in displayedProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <PaginationLine
        v-if="!loading && specialOffers.length > 0"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="changePage"
      />
    </section>
    <section
      class="Untitled my-5 py-4 position-relative"
      data-aos="fade-up"
      data-aos-duration="1200"
    ></section>
    <section
      class="container my-5 py-4"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold mb-0 text-black">NEW ARRIVALS</h2>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else class="row g-4">
        <ProductCard
          v-for="product in displayedProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <PaginationLine
        v-if="!loading && specialOffers.length > 0"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="changePage"
      />
    </section>
    <footer
      data-aos="fade-up"
      data-aos-duration="1200"
      class="membership-offer py-5 mt-auto"
      style="font-family: MyCustomFont"
    >
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <h2 class="">
              BECOME A MEMBER & GET 15% OFF
              <button class="btn p-0 border-0 bg-transparent position-relative">
                <img
                  src="@/assets/icon/Bottun.png"
                  alt="SIGN UP FOR FREE"
                  class="img-fluid"
                  style="max-height: 60px"
                />
                <span
                  class="position-absolute text-white fw-bold"
                  style="
                    font-size: 12px;
                    top: 50%;
                    left: 15%;
                    transform: translateY(-50%);
                  "
                >
                  SIGN UP FOR FREE
                </span>
              </button>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import api from "@/api/api";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "@/components/ProductCard.vue";
import PaginationLine from "@/components/PaginationLine.vue";

export default {
  components: { ProductCard, PaginationLine },
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = 4;
    const specialOffers = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchProducts = async () => {
      try {
        loading.value = true;
        const products = await api.get("/products");
        specialOffers.value = products.map((product) => ({
          ...product,
          originalPrice: (product.price * 1.1).toFixed(2),
          discountedPrice: product.price.toFixed(2),
        }));
      } catch (err) {
        error.value = err.message;
        console.error("Error fetching products:", err);
      } finally {
        loading.value = false;
      }
    };

    const totalPages = computed(() =>
      Math.ceil(specialOffers.value.length / itemsPerPage)
    );

    const displayedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return specialOffers.value.slice(start, end);
    });

    const changePage = (page) => {
      currentPage.value = page;
    };

    onMounted(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false,
        mirror: true,
      });

      fetchProducts();
    });
    return {
      currentPage,
      specialOffers,
      displayedProducts,
      totalPages,
      loading,
      error,
      changePage,
    };
  },
};
</script>

<style scoped>
.main {
  font-family: "MyCustomFont1", sans-serif; /* تطبيق الخط هنا */
}
@font-face {
  font-family: "MyCustomFont";
  src: url("../assets/fonts/Dubai-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "MyCustomFont1";
  src: url("../assets/fonts/Dubai-Medium.ttf") format("truetype");
}
.start-25 {
  left: 15%;
}
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
.sale-banner {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("@/assets/Header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  display: flex;
  align-items: center;
}
.Untitled {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("@/assets/Untitled-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  display: flex;
  align-items: center;
}
.jewlery {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("@/assets/Jewelry.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.special-offer-item {
  transition: all 0.3s ease;
  background-color: #fff;
}
.special-offer-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
.membership-offer {
  background-color: yellow;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
}

.btn:hover img {
  opacity: 0.9;
  transform: scale(1.02);
  transition: all 0.3s ease;
}
@media (max-width: 768px) {
  .Untitled,
  .jewlery,
  .sale-banner {
    text-align: center;
    min-height: 300px;
  }
  .display-4,
  .lead {
    display: none;
  }
  .btn,
  .img-fluid {
    text-align: center;
    max-height: 50px !important;
    align-items: center;
  }

  .sale-banner .col-md-8 {
    text-align: center;
  }
}
</style>
