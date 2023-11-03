import { useNavigate } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const cartCtx = useContext(CartContext);
  const amountItems = cartCtx.items.length;
  const floatPrice = cartCtx.amountPrice;
  const price = floatPrice.toFixed(2);
  const totalPrice = +price + 18 + 5;

  const [payMethod, setPayMethod] = useState("cash");

  const setBankMethodHandler = () => {
    setPayMethod("bank");
  };

  const setCashMethodHandler = () => {
    setPayMethod("cash");
  };

  const navigate = useNavigate();
  const placeOrderHandler = () => {
    navigate("/");
    toast("🦄 Order Successfully!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    cartCtx.clearCart();
  };

  return (
    <div className="font-body w-1/2 flex flex-col gap-5">
      <div className="flex flex-col gap-4 border-b-neutral-300 border-b-2 pb-8">
        <p className="flex flex-row justify-between ">
          <span className="text-2xl font-semibold">Product</span>
          <span className="text-2xl font-semibold">Subtotal</span>
        </p>
        <p className="flex flex-row justify-between ">
          <span className="text-lg font-medium text-neutral-500">
            X{amountItems}
          </span>
          <span className="text-lg font-medium">{price}$</span>
        </p>
        <p className="flex flex-row justify-between ">
          <span className="text-xl font-medium">Total</span>
          <span className="text-2xl font-bold text-yellow-600">
            {totalPrice.toFixed(2)}$
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-base font-semibold">SELECT PAYMENT METHOD</p>
        <p className="text-lg font-normal text-neutral-500 text-justify">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div className="flex flex-col gap-1">
          <p className="flex flex-row items-center gap-3 text-neutral-600">
            <input
              onClick={setBankMethodHandler}
              checked={payMethod === "bank"}
              type="radio"
              className="rounded-full w-5 h-5"
            ></input>
            <span className="text-lg font-semibold">Direct Bank Transfer</span>
          </p>
          <p className="flex flex-row items-center gap-3 text-neutral-600">
            <input
              onClick={setCashMethodHandler}
              checked={payMethod === "cash"}
              type="radio"
              className="rounded-full w-5 h-5"
            ></input>
            <span className="text-lg font-semibold">Cash On Delivery</span>
          </p>
        </div>
        <p className="text-lg font-normal text-black text-justify">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-semibold">privacy policy</span>
          .
        </p>
      </div>

      <button
        onClick={placeOrderHandler}
        className="text-xl text-center rounded-lg py-3 mx-44 mt-5
         text-white font-semibold  ease-out duration-200 bg-yellow-600 hover:bg-yellow-700"
      >
        Place Order
      </button>
    </div>
  );
};
export default PlaceOrder;
