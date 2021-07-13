import React from "react";
import { Login, Menu } from "../pages";
import paths from "../constants/paths";

export const routes = [
  {
    path: paths.LOGIN,
    exact: true,
    title: () => "Login",
    view: () => <Login />,
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