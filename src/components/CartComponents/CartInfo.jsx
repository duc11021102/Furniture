import CartList from "./CartList";
import FormBid from "./FormBid";
const CartInfo = () => {
  return (
    <div className=" lg:grid lg:grid-cols-12 lg:gap-6 px-10 xl:gap-12 xl:px-28 mt-20 ">
      <CartList />
      <FormBid />
    </div>
  );
};
export default CartInfo;
