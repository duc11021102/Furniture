/* eslint-disable react/prop-types */
// import ProductItem from "../../components/ProductsComponents/ProductItem";
import { lazy } from "react";
const ItemGrid = lazy(() => import("./ItemGrid"));

const ProductsList = (props) => {
  return (
    <div className="grid grid-cols-4 gap-8 px-28 mt-16 ">
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
