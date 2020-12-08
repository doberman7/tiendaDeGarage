import { useState, createContext, useContext, useEffect } from 'react';

import { currentUserFn } from '../services/auth';

export const AppContext = createContext();

export const AppCtxProvider = (props) => {
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

  // const getProducts = (userInfo) => {
  //   setUser(userInfo);
  // };

  const addProfilePic = (img) => setUser({ ...user, img });

  const logout = () => {
    //TODO: Cerrar la sesion en el server y en el cliente
    setUser(null);
  };

  const value = { user, login, logout, signup, setUserUpdtade, addProfilePic };

  return <AppContext.Provider {...props} value={value} />;
};

// Opcional: agregamos un custom hook para evitar consumir en cada componente nuestro ctx

export const useContextInfo = () => useContext(AppContext);
