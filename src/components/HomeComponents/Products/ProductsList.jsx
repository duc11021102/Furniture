/* eslint-disable react/prop-types */
import { lazy } from "react";

// import ProductItem from "./ProductItem";
const ProductItem = lazy(() => import("./ProductItem"));

const ProductsList = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 xl:px-20 2xl:px-28 mt-10 ">
      {props.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          category={prod.category}
          price={prod.price}
          image={prod.images}
        ></ProductItem>
      ))}
    </div>
  );
};
export default ProductsList;
