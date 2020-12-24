import { useState, createContext, useContext, useEffect } from 'react';

import { currentUserFn } from '../services/auth';

export const AppContext = createContext();

export const AppCtxProvider = (props) => {
  //es importa recordar que user el JSON de la respuesta del back end, no necesariamente un usuario
  const [user, setUser] = useState(null);
  //actualizar user
  const [userUpdtade, setUserUpdtade] = useState(false);

  useEffect(() => {
    async function getSessionData() {
      const { data } = await currentUserFn();
      login(data);
    }

    getSessionData();
    //vinculado a actualizar el estado
    setUserUpdtade(false);
  }, [userUpdtade]);

  const login = (userInfo) => {
    setUser(userInfo);
  };

  const signup = (userInfo) => {
    setUser(userInfo);
  };

  // const getWishes = (userInfo) => {
  //   setUser(userInfo);
  // };

  const addProfilePic = (img) => setUser({ ...user, img });

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout, signup, setUserUpdtade, addProfilePic };

  return <AppContext.Provider {...props} value={value} />;
};

// Opcional: agregamos un custom hook para evitar consumir en cada componente nuestro ctx

export const useContextInfo = () => useContext(AppContext);
