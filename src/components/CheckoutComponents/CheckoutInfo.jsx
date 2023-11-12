import BillingDetail from "./BillingDetail";
import PlaceOrder from "./PlaceOrder";
const CheckoutInfo = () => {
  return (
    <section className="w-full mt-14 sm:mt-20 flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-8 lg:px-10 xl:px-28 ">
      <BillingDetail />
      <PlaceOrder />
    </section>
  );
};
export default CheckoutInfo;
