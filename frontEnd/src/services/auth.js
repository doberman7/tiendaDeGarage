import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';
const authService = axios.create({
  baseURL,
  withCredentials: true,
});

// 1. Signup
export const signupFn = (userInfo) => authService.post('/signup', userInfo);

export const loginFn = (userInfo) => authService.post('/login', userInfo);

export const currentUserFn = () => authService.get('/current-user');

export const logoutFn = () => authService.get('/logout');

export const deleteFn = () => authService.get('/deleteProfile');

export const editProfileFn = (userInfo) =>
  authService.put('/editProfile', userInfo);
///PRODUCTS
export const createProductFn = (userInfo) =>
  authService.post('/product/create', userInfo);

export const getUserProductsFn = async () => {
  const { data } = await authService.get('/product/get-user-products');
  return data;
};
export const getProductDetailsFn = async (idProduct) => {
  const { data } = await authService.get(
    `/product/get-product-details/${idProduct}`
  );
  return data;
};

export const editProductFn = (idProduct, productInfo) =>
  authService.put(`/product/edit-product/${idProduct}`, productInfo);
