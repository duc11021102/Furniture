import ProductsList from "./ProductsList";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
// import { defer, json } from "react-router-dom"; // trì hoãn việc tải dữ liệu cho đến khi thành phần được render
const Products = (props) => {
  // eslint-disable-next-line react/prop-types
  const ourProducts = props.products.slice(0, 4);
  const navigate = useNavigate();
  const showMoreHandler = useCallback(() => {
    navigate("/products");
  }, [navigate]);
  return (
    <section className="px-8 lg:py-10  py-14 font-body ">
      <div className="">
        <h1 className="text-4xl font-bold text-center">Our Products</h1>
        <ProductsList products={ourProducts} />
        <div className="w-full text-center flex justify-center">
          <button
            onClick={showMoreHandler}
            className="block mt-8 px-6 py-3 w-60 text-xl text-yellow-700 border-2
           border-yellow-700 font-semibold ease-out duration-200 hover:bg-yellow-700 hover:text-white"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};
export default Products;
