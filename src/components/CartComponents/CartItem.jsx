/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useCallback } from "react";
const CartItem = (props) => {
  const { id, images, title, amount, category, price } = props.item;
  const cartCtx = useContext(CartContext);
  const removeHandler = useCallback(() => {
    cartCtx.deleteItem(id);
    toast("🦄 Item removed from cart!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, [cartCtx, id]);

  return (
    <li className="font-body flex my-14 border-b-2 pb-4 border-orange-100">
      <div>
        <img
          src={`https://be-furrniture.onrender.com/` + images}
          className="object-cover w-32 h-32 rounded-lg"
        ></img>
      </div>
      <div className="flex flex-col gap-1 ml-16 w-48">
        <p className="text-black text-lg font-bold">{title}</p>
        <p className="text-neutral-300 text-base font-semibold">{category}</p>
      </div>
      <div className="ml-20 flex flex-col gap-2 items-center">
        <p className="text-base font-medium">Amount</p>
        <div className="font-bold text-center border-2 w-9 h-8 rounded-md">
          {amount}
        </div>
        <FiTrash2
          onClick={removeHandler}
          className="text-yellow-600 text-xl hover:text-yellow-700"
        />
      </div>
      <div className="ml-auto">
        <h1 className="text-lg font-bold">${price}</h1>
      </div>
    </li>
  );
};
export default CartItem;
