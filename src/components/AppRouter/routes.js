import React from "react";

const LandingPage = React.lazy(() =>
  import("../../screens/LandingPage/LandingPage")
);
const Product = React.lazy(() => import("../../screens/Product/Product"));
const Cart = React.lazy(() => import("../../screens/Cart/Cart"));

export const screenNames = {
  landingPage: "/",
  productDetails: "/product",
  cart: "/cart",
};

export const routes = {
  [screenNames.landingPage]: {
    component: LandingPage,
    displayName: "Home",
  },
  [screenNames.productDetails]: {
    component: Product,
    displayName: "Product Details",
  },
  [screenNames.cart]: {
    component: Cart,
    displayName: "Shopping Cart",
  },
};
