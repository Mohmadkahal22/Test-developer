<template>
  <header class="bg-light text-dark shadow">
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <div
        class="d-flex flex-column"
        style="position: relative; right: -20px; top: 10px"
      >
        <img
          src="../assets/icon/DEVELOPER TEST - Logo Black.png"
          alt="Developer Test Logo"
          class="me-2"
          style="height: 150px"
        />
      </div>

      <nav class="d-none d-lg-flex" style="margin-top: auto">
        <ul class="navbar-nav d-flex flex-row gap-4">
          <li class="nav-item">
            <router-link
              to="/category/electronics"
              class="nav-link text-dark"
              style="font-size: 1.2rem"
              >ElECTRONICS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/category/jewelery"
              class="nav-link text-dark"
              style="font-size: 1.2rem"
              >JEWELRY</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/mens-clothing"
              class="nav-link text-dark"
              style="font-size: 1.2rem"
              >MEN CLOTHING</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/womens-clothing"
              class="nav-link text-dark"
              style="font-size: 1.2rem"
              >WOMEN CLOTHING</router-link
            >
          </li>
        </ul>
      </nav>

      <div
        class="d-flex flex-column align-items-center"
        style="margin-bottom: 25px"
      >
        <nav
          class="d-none d-lg-flex w-100"
          style="font-family: 'MyCustomFont1'"
        >
          <ul
            class="navbar-nav d-flex flex-row justify-content-center gap-4"
            style="flex: 1"
          >
            <li class="nav-item">
              <router-link to="/" class="nav-link text-dark">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about-us" class="nav-link text-dark"
                >About Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/media-center" class="nav-link text-dark"
                >Media Center</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link text-dark"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item" style="font-family: 'MyCustomFont'">
              <router-link to="/arabic" class="nav-link text-dark"
                >AR</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- Search Bar -->
        <div
          class="serch d-flex justify-content-center align-items-center gap-3"
        >
          <div class="position-relative" style="max-width: 240px">
            <input
              type="text"
              class="form-control ps-2"
              placeholder="Search..."
              aria-label="Search"
              style="
                background-color: #f5f5dc;
                border: 2px solid #ffffff;
                border-radius: 0px;
                height: 40px;
              "
            />
            <i
              class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3"
            ></i>
          </div>

          <!-- Icons -->
          <router-link to="/profile" class="text-dark">
            <img
              src="../assets/icon/Login.png"
              alt="Profile Icon"
              class="me-2"
              style="height: 30px"
            />
          </router-link>
          <router-link to="/favorites" class="text-dark">
            <img
              src="../assets/icon/heart_11613265.png"
              alt="Favorites Icon"
              class="me-2"
              style="height: 30px"
            />
          </router-link>
          <router-link to="/cart" class="text-dark position-relative">
            <img
              src="../assets/icon/Cart.png"
              alt="Cart Icon"
              class="me-2"
              style="height: 30px"
            />
            <span
              v-if="cartItemCount > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartItemCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from "@/store/cart.js";
import { computed } from "vue";

export default {
  name: "AppHeader",
  setup() {
    const cartStore = useCartStore();
    const cartItemCount = computed(() => cartStore.itemCount);

    return { cartItemCount };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "MyCustomFont";
  src: url("../assets/fonts/Dubai-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "MyCustomFont1";
  src: url("../assets/fonts/Dubai-Light.ttf") format("truetype");
}
header {
  font-family: "MyCustomFont", sans-serif;
}
.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
}
.header-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.form-control:hover {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.bi-search {
  transition: all 0.3s ease;
}

.form-control:focus + .bi-search {
  color: #0d6efd;
}
@media (max-width: 768px) {
  .form-control {
    display: none;
  }
}
</style>
