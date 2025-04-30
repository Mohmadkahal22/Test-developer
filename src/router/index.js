import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Category from "@/views/CategoryProduct.vue";
import Product from "@/views/ProductDetilse.vue";
import Cart from "@/views/CartProduct.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/category/:id", component: Category },
  { path: "/product/:id", component: Product },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
