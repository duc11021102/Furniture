/* eslint-disable react/prop-types */
import { lazy } from "react";

const ItemList = lazy(() => import("./ItemList"));
const ProductsList = (props) => {
  return (
    <div className="flex flex-col gap-10 px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 mt-16">
      {props.products.map((prod) => (
        <ItemList
          key={prod.id}
          id={prod.id}
          title={prod.title}
          category={prod.category}
          price={prod.price}
          image={prod.images}
        />
      ))}
    </div>
  );
};
export default ProductsList;
