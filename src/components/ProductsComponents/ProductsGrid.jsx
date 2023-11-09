/* eslint-disable react/prop-types */
// import ProductItem from "../../components/ProductsComponents/ProductItem";
import { lazy } from "react";
const ItemGrid = lazy(() => import("./ItemGrid"));

const ProductsList = (props) => {
  return (
    <div className="grid sm:grid-cols-2 sm:px-10 sm:gap-8  md:grid-cols-3 md:gap-8 md:px-4  lg:grid-cols-4 lg:gap-8  lg:px-12 xl:px-20 2xl:px-28 mt-16 ">
      {props.products.map((prod) => (
        <ItemGrid
          key={prod.id}
          id={prod.id}
          title={prod.title}
          category={prod.category}
          price={prod.price}
          image={prod.images}
        ></ItemGrid>
      ))}
    </div>
  );
};
export default ProductsList;
