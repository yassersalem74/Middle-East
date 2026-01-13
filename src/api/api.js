import axios from "axios";

const BASE_URL = "https://middleeastseven.runasp.net/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

// ===== Categories =====
export const CategoriesAPI = {
  getAll: () => api.get("/Categories"),

};

// ===== Products =====
export const ProductsAPI = {
  getAll: () => api.get("/Products"),

};

// ===== Industries =====
export const IndustriesAPI = {
  getAll: () => api.get("/Industries"),

};



// ===== Exhibitions =====
export const ExhibitionsAPI = {
  getAll: () => api.get("/Exhibitions"),

};


// ===== Slider Images =====
export const SliderImagesAPI = {
  getAll: () => api.get("/SliderImages"),

};


// ===== Team Members =====
export const TeamMembersAPI = {
  getAll: () => api.get("/TeamMembers"),

};
