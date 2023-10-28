import { Suspense, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";
import Policy from "../components/Policy";
import CheckoutInfo from "../components/CheckoutComponents/CheckoutInfo";
const CheckoutPage = () => {
  // scroll to top when render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<LoadingPage />}>
      <section className="w-full">
        <Banner title="Checkout" />
        <CheckoutInfo />
        <Policy />
      </section>
    </Suspense>
  );
};
export default CheckoutPage;
