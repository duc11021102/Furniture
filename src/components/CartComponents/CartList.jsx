import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const CartList = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="col-span-8">
      <div className="w-full h-10 bg-orange-100 "></div>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item} />
        ))}
      </ul>
    </div>
  );
};
export default CartList;
