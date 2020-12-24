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
export const createWishFn = (userInfo) =>
  authService.post('/wish/create', userInfo);

export const getUserWishesFn = async () => {
  const { data } = await authService.get('/wish/get-user-wishes');
  return data;
};
export const getWishDetailsFn = async (idWish) => {
  const { data } = await authService.get(
    `/wish/get-wish-details/${idWish}`
  );
  return data;
};

export const editWishFn = (idWish, wishInfo) =>
  authService.put(`/wish/edit-wish/${idWish}`, wishInfo);

export const deleteWishFn = (idWish) =>
  authService.delete(`/wish/delete-wish/${idWish}`);
