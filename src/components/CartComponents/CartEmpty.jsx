// import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const CartEmpty = () => {
  const navigate = useNavigate();
  const returnHandler = () => {
    navigate("/products");
  };
  return (
    <section className="w-full mt-10 sm:mt-16 px-5">
      <div className="font-body text-center h-72 flex gap-4 flex-col justify-center items-center">
        <FiShoppingCart className=" text-5xl sm:text-8xl text-yellow-600" />
        <h1 className="text-black text-2xl sm:text-3xl font-bold my-2 sm:my-4">
          Your Cart is Empty!
        </h1>
        <p className="text-base sm:text-lg font-medium">
          Must add items on the cart before you proceed to checkout.
        </p>

        <div
          onClick={returnHandler}
          className="flex justify-center items-center max-w-44 text-sm sm:text-lg rounded-md py-3 px-2 sm:px-3 mx-10  bg-yellow-600 
         text-white font-semibold hover:bg-yellow-700 ease-out duration-200"
        >
          <p className="mr-1">RETURN TO SHOP </p>
          <FiChevronRight className="text-2xl" />
        </div>
      </div>
    </section>
  );
};
export default CartEmpty;
