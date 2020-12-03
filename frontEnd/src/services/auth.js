import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';
const authService = axios.create({
  baseURL,
  withCredentials: true,
});

// 1. Signup
export const signupFn = (userInfo) => {
  authService.post('/signup', userInfo);
};

export const loginFn = (userInfo) => authService.post('/login', userInfo);

export const currentUserFn = () => authService.get('/current-user');

export const logoutFn = () => authService.get('/logout');

export  const deleteFn= () => authService.get("/deleteProfile")

 export const editProfileFn = (id, user) => authService.post(`/${id}`, user);
