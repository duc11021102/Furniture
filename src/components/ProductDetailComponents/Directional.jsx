import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const Directional = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props.product;
  return (
    <section className="font-body w-full bg-orange-50 flex px-10 lg:px-20 py-6">
      <div className="flex gap-3 justify-center items-center text-base  font-medium border-r-2 pr-2 border-gray-500">
        <Link to="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <FiChevronRight className="text-xl" />
        <Link to="/products" className="text-gray-500  hover:text-black">
          Shop
        </Link>
        <FiChevronRight className="text-xl" />
      </div>
      <div className="flex justify-center items-center text-base font-medium pl-3">
        <p>{title}</p>
      </div>
    </section>
  );
};
export default Directional;
