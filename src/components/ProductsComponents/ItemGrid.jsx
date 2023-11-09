/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  return (
    <div className="relative block font-body bg-gray-100 ease-out duration-200 hover:scale-95">
      <img
        src={`https://be-furrniture.onrender.com/` + props.image}
        className="object-cover w-full sm:h-44 md:h-52 xl:h-60 2xl:h-72 "
      ></img>
      <Link
        to={`/products/${props.id}`}
        className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-60
           text-white text-2xl font-bold flex items-center justify-center opacity-0 transform scale-0 
           transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
      >
        Details
      </Link>
      <div className="px-4 py-3">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-base font-medium text-gray-500 mt-2">
          {props.category}
        </p>
        <h2 className="mt-2 text-lg font-bold">{props.price}$</h2>
      </div>
    </div>
  );
};
export default ProductItem;
