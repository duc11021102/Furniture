/* eslint-disable no-unused-vars */
import React from "react";
// item khi thêm vào cart-context sẽ có dạng
/**
 * {
 *  id: p1,
 *  title: Lamb,
 *  amount: 5,
 *  price: 10.99
 * }
 */
const CartContext = React.createContext({
  items: [],
  amountPrice: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default CartContext;
