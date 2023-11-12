import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const ItemList = (props) => {
  return (
    <Link
      to={`/products/${props.id}`}
      className="w-full flex flex-col sm:flex-row justify-between bg-neutral-100 shadow-lg rounded-lg py-5 px-7 hover:shadow-2xl duration-200"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 ">
        <img
          src={`https://be-furrniture.onrender.com/` + props.image}
          className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-lg"
        ></img>
        <div>
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="text-base font-medium text-gray-500 mt-2">
            {props.category}
          </p>
        </div>
      </div>

      <h1 className="text-xl font-bold right-0">{props.price}$</h1>
    </Link>
  );
};
export default ItemList;
