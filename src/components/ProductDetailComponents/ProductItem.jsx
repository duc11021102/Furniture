import { useState, useCallback, useEffect } from "react";
import { FiInstagram } from "react-icons/fi";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { toast } from "react-toastify";

const ProductItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, description, category, price, images } = props.product;
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("brown");
  const [amount, setAmount] = useState(1);
  // scroll to top when render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const reduceHandler = useCallback(() => {
    if (amount === 1) {
      return;
    } else {
      setAmount(amount - 1);
    }
  }, [amount]);
  const addHandler = useCallback(() => {
    if (amount === 5) {
      return;
    } else {
      setAmount(amount + 1);
    }
  }, [amount]);
  const defaultSize =
    "w-7 h-7 bg-orange-50 text-md rounded-md flex justify-center items-center font-medium text-black ease-out duration-200";
  const onClickSize =
    "w-7 h-7 bg-yellow-600 text-md rounded-md flex justify-center items-center font-medium text-white ease-out duration-200";

  const cartCtx = useContext(CartContext);
  const addToCartHandler = useCallback(
    (e) => {
      e.preventDefault();
      cartCtx.addItem({
        id: id,
        title: title,
        category: category,
        price: price,
        images: images,
        color: color,
        amount: +amount,
      });
      toast("🦄 Item added to cart!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    [amount, id, title, category, price, images, color, cartCtx]
  );
  return (
    <section className="font-body w-full px-8 sm:px-10 lg:px-20 py-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 ">
        <div className="flex justify-center">
          <img
            className="object-cover w-full max-w-xs max-h-96 rounded-md"
            src={`https://be-furrniture.onrender.com/${images}`}
          ></img>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-base font-bold mt-1 text-neutral-300">
            {category}
          </p>
          <p className="text-xl mt-4 font-bold ">{price}$</p>
          <p className="text-base max-w-lg mt-1 text-justify font-medium">
            {description}
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-base font-bold text-neutral-300">Size</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setSize("L");
                }}
                className={size === "L" ? onClickSize : defaultSize}
              >
                L
              </button>
              <button
                onClick={() => {
                  setSize("XL");
                }}
                className={size === "XL" ? onClickSize : defaultSize}
              >
                XL
              </button>
              <button
                onClick={() => {
                  setSize("XS");
                }}
                className={size === "XS" ? onClickSize : defaultSize}
              >
                XS
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <p className="text-base font-bold text-neutral-300">Color</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setColor("brown");
                }}
                className={`w-7 h-7 bg-yellow-600 text-md rounded-full ease-out duration-100 ${
                  color === "brown" && "border-2 border-black"
                }`}
              ></button>
              <button
                onClick={() => {
                  setColor("purple");
                }}
                className={`w-7 h-7 bg-purple-600 text-md rounded-full ease-out duration-100 ${
                  color === "purple" && "border-2 border-black"
                }`}
              ></button>
              <button
                onClick={() => {
                  setColor("black");
                }}
                className={`w-7 h-7 bg-gray-800 text-md rounded-full ease-out duration-100 ${
                  color === "black" && "border-2 border-black"
                }`}
              ></button>
            </div>
          </div>
          <div className="flex mt-4 gap-4">
            <div className="flex justify-between items-center w-28 h-16 border-2 border-gray-500 rounded-lg p-2">
              <button
                onClick={reduceHandler}
                className="text-2xl font-semibold text-gray-500"
              >
                -
              </button>
              <p className=" font-semibold">{amount}</p>
              <button
                onClick={addHandler}
                className="text-xl font-semibold text-gray-500"
              >
                +
              </button>
            </div>
            <button
              className="w-40 h-16 font-semibold flex justify-center items-center border-2 border-gray-500 
            rounded-xl ease-out duration-100 hover:bg-gray-200 "
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-2 border-t-2 border-neutral-200 mt-12 pt-10 text-neutral-400 text-xs md:text-base font-medium ">
            <div className="flex">
              <p className=" w-20">SKU</p>
              <p>: SS001</p>
            </div>
            <div className="flex">
              <p className="w-20">Category</p>
              <p>: {category}</p>
            </div>
            <div className="flex">
              <p className="w-20">Tags</p>
              <p>: Sofa, Kids, Chair, Home, Shop</p>
            </div>
            <div className="flex">
              <p className="w-20">Share</p>
              <p className="flex justify-center items-center">
                <span>:</span>
                <FiInstagram className="text-black ml-2 text-lg" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductItem;
