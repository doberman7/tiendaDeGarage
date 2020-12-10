import axios from 'axios';
const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';

const itemsService = axios.create({
  baseURL,
  withCredentials: true,
});

//Servicios para los items
export const getUserItems = () => itemsService.get(`/item/get-user-items`);
export const getItemDetails = (id) =>
  itemsService.get(`/item/get-item-details/${id}`);
export const createItem = (item) => itemsService.post(`/item/create`, item);
export const editItem = (id, item) =>
  itemsService.put(`/item/edit-item/${id}`, item);
export const deleteItem = (id) =>
  itemsService.delete(`/item/delete-item/${id}`);
