// import { useContext } from "react";
// import CartContext from "../store/cart-context";
import { Suspense } from "react";
import Policy from "../components/Policy";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";
import CartInfo from "../components/CartComponents/CartInfo";
const CartPage = () => {
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner title="Cart" />
        <CartInfo />
        <Policy />
      </Suspense>
    </section>
  );
};
export default CartPage;
