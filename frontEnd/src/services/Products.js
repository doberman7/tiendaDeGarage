import axios from 'axios';
const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';

const productsService = axios.create({
  baseURL,
  withCredentials: true,
});

//Servicios para los products
export const getUserProducts = () =>
  productsService.get(`/product/get-user-products`);
export const getProductDetails = (id) =>
  productsService.get(`/product/get-product-details/${id}`);
export const createProduct = (product) =>
  productsService.post(`/product/create`, product);
export const editProduct = (id, product) =>
  productsService.put(`/product/edit-product/${id}`, product);
export const deleteProduct = (id) =>
  productsService.delete(`/product/delete-product/${id}`);

export const srvAllProducts = () => productsService.get(`product/all`);
