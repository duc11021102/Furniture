// import { useContext } from "react";
// import CartContext from "../store/cart-context";
import CartEmpty from "../components/CartComponents/CartEmpty";
import { Suspense } from "react";
import Policy from "../components/Policy";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";
import CartInfo from "../components/CartComponents/CartInfo";
import { useContext } from "react";
import CartContext from "../store/cart-context";
const CartPage = () => {
  const cartCtx = useContext(CartContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <section className="w-full">
        {cartCtx.items.length != 0 && <Banner title="Cart" />}
        {cartCtx.items.length != 0 && <CartInfo />}
        {cartCtx.items.length === 0 && <CartEmpty />}
        <Policy />
      </section>
    </Suspense>
  );
};
export default CartPage;
