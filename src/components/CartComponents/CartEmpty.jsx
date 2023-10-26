import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
const CartEmpty = () => {
  return (
    <section className="w-full mt-16">
      <div className="font-body text-center h-72 flex gap-4 flex-col justify-center items-center">
        <FiShoppingCart className="text-8xl text-yellow-600" />
        <h1 className="text-black text-4xl font-bold my-4">
          Your Cart is Empty!
        </h1>
        <p className="text-lg font-medium">
          Must add items on the cart before you proceed to checkout.
        </p>
        <Link
          to={"/products"}
          className=" max-w-44 text-lg rounded-md py-3 px-3 mx-10  bg-yellow-600 
         text-white font-semibold hover:bg-yellow-700 ease-out duration-200"
        >
          RETURN TO SHOP
        </Link>
      </div>
    </section>
  );
};
export default CartEmpty;
