export const isAuthenticated = () => {
  return localStorage.getItem("AUTH") ? true : false;
};

export const setLocalStorageAuth = (isAuth) => {
  return localStorage.setItem("AUTH", isAuth);
};

export const setLocalStorageToken = (token) => {
  return localStorage.setItem("TOKEN", token);
};

export const getLocalStorageToken = () => {
  return localStorage.getItem("TOKEN");
};
