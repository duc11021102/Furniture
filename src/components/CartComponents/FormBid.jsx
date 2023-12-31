import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
const FormBid = () => {
  const cartCtx = useContext(CartContext);
  const priceFloat = parseFloat(cartCtx.amountPrice);
  const amount = +priceFloat + 18.0 + 5.0;

  return (
    <div className="col-span-4">
      <div className=" px-5 xl:px-10 py-8 font-body flex flex-col border-2 border-gray-300  text-black">
        <div className="text-sm sm:text-base w-full flex justify-between mb-3 border-b-2 border-b-black pb-1">
          <span className="font-medium">Subtotal</span>
          <span className="font-medium">${priceFloat.toFixed(2)}</span>
        </div>
        <div className="text-sm sm:text-base w-full flex justify-between mb-3 border-b-2 border-b-black pb-1">
          <span className="font-medium">Shipping</span>
          <span className="font-medium">$5.00</span>
        </div>
        <div className="text-sm sm:text-base w-full flex justify-between mb-3 border-b-2 border-b-black pb-1">
          <span className="font-medium">Tax</span>
          <span className="font-medium">$18.00</span>
        </div>
        <div className="text-sm sm:text-base w-full flex justify-between mt-5">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">${amount.toFixed(2)}</span>
        </div>
        <Link
          to="checkout"
          className=" text-lg sm:text-xl text-center rounded-lg py-3 xl:mx-10 mt-10 bg-yellow-600 
         text-white font-semibold hover:bg-yellow-700 ease-out duration-200"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};
export default FormBid;
