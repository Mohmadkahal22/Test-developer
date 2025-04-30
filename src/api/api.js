// src/api/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  // GET Request
  async get(resource) {
    try {
      const response = await apiClient.get(resource);
      return response.data;
    } catch (error) {
      throw new Error(`[API GET Error]: ${error}`);
    }
  },

  // POST Request
  async post(resource, data) {
    try {
      const response = await apiClient.post(resource, data);
      return response.data;
    } catch (error) {
      throw new Error(`[API POST Error]: ${error}`);
    }
  },

  // PUT Request
  async put(resource, data) {
    try {
      const response = await apiClient.put(resource, data);
      return response.data;
    } catch (error) {
      throw new Error(`[API PUT Error]: ${error}`);
    }
  },

  // DELETE Request
  async delete(resource) {
    try {
      const response = await apiClient.delete(resource);
      return response.data;
    } catch (error) {
      throw new Error(`[API DELETE Error]: ${error}`);
    }
  },

  // Custom GET for categories
  async getCategoryProducts(categoryId) {
    return this.get(`/products/category/${categoryId}`);
  },
};
