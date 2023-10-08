import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const ItemList = (props) => {
  return (
    <Link
      to={`/products/${props.id}`}
      className="w-full flex justify-between shadow-lg rounded-lg py-5 px-7 hover:shadow-2xl duration-200"
    >
      <div className="flex gap-20 ">
        <img
          src={`http://localhost:8080/` + props.image}
          className="w-36 h-36 object-cover rounded-lg"
        ></img>
        <div>
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="text-base font-medium text-gray-500 mt-2">
            {props.category}
          </p>
        </div>
      </div>

      <h1 className="text-xl font-bold right-0">${props.price}</h1>
    </Link>
  );
};
export default ItemList;
