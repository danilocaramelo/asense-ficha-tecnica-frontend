import React from "react";
import { Login, Home, InitialPage, Register } from "../pages";
import paths from "../constants/paths";

export const routes = [
  {
    path: paths.HOME,
    exact: true,
    title: () => "Initial Page",
    view: () => <InitialPage />,
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
    title: () => "Home",
    view: () => <Home />,
    onlyAuthorized: false,
  },
];

export default routes;
