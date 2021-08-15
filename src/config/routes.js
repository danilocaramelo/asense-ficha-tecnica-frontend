import React from "react";
import { Login, Menu, Home, Register } from "../pages";
import paths from "../constants/paths";

export const routes = [
  {
    path: paths.HOME,
    exact: true,
    title: () => "Home",
    view: () => <Home />,
    onlyAuthorized: false,
  },
  {
    path: paths.LOGIN,
    exact: true,
    title: () => "Login",
    view: () => <Login />,
    onlyAuthorized: false,
  },
  {
    path: paths.REGISTER,
    exact: true,
    title: () => "Register",
    view: () => <Register />,
    onlyAuthorized: false,
  },
  {
    path: paths.MENU,
    exact: true,
    title: () => "Menu",
    view: () => <Menu />,
    onlyAuthorized: false,
  },
];

export default routes;
