import BillingDetail from "./BillingDetail";
import PlaceOrder from "./PlaceOrder";
const CheckoutInfo = () => {
  return (
    <section className="w-full px-28 mt-20 flex flex-row justify-between">
      <BillingDetail />
      <PlaceOrder />
    </section>
  );
};
export default CheckoutInfo;
