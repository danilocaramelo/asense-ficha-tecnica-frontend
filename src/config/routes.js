import React from "react";
import { Login, Home, InitialPage, Register, ProductList } from "../pages";
import paths from "../constants/paths";
import { SupplyList } from "../pages/SupplyList";

export const routes = [
  {
    path: paths.INITIAL_PAGE,
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
    path: paths.HOME,
    exact: true,
    title: () => "Home",
    view: () => <Home />,
    onlyAuthorized: false,
  },
  {
    path: paths.PRODUCT_LIST,
    exact: true,
    title: () => "Product List",
    view: () => <ProductList />,
    onlyAuthorized: false,
  },
  {
    path: paths.SUPPLY_LIST,
    exact: true,
    title: () => "Supply List",
    view: () => <SupplyList />,
    onlyAuthorized: false,
  },
];

export default routes;
