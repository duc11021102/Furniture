/* eslint-disable react/prop-types */
// import itemImg from "../../../assets/imageItem.webp";

const ProductItem = (props) => {
  return (
    <div className="relative w-72 group block font-body bg-gray-100 ease-out duration-200 hover:scale-95">
      <img
        src={`http://localhost:8080/` + props.image}
        className="object-cover w-72 h-72"
      ></img>
      <button
        className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-60
       text-white text-2xl font-bold flex items-center justify-center opacity-0 transform scale-0 
       transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
      >
        Add to Cart
      </button>
      <div className="px-4 py-3">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p className="text-base font-medium text-gray-500 mt-2">
          {props.category}
        </p>
        <h2 className="mt-2 text-lg font-bold">{props.price}</h2>
      </div>
    </div>
  );
};
export default ProductItem;
