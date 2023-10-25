import CartList from "./CartList";
import FormBid from "./FormBid";
const CartInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-12 px-28 mt-20 ">
      <CartList />
      <FormBid />
    </div>
  );
};
export default CartInfo;
