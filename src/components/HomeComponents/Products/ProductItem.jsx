/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  return (
    <Link
      to={`/products/${props.id}`}
      className="relative block font-body bg-gray-100 transition-all duration-200 hover:scale-95  hover:shadow-xl   hover:opacity-70"
    >
      <img
        src={`https://be-furrniture.onrender.com/` + props.image}
        className="object-cover w-full h-48 xl:h-60 2xl:h-72"
      ></img>
      {/* <Link
        to={`/products/${props.id}`}
        className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-60
       text-white text-2xl font-bold flex items-center justify-center opacity-0 transform scale-0 
       transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
      >
        Add to Cart
      </Link> */}
      <div className="px-4 py-3">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-base font-medium text-gray-500 mt-2">
          {props.category}
        </p>
        <h2 className="mt-2 text-lg font-bold">{props.price}$</h2>
      </div>
    </Link>
  );
};
export default ProductItem;
