import { lazy, useState } from "react";
import { defer, json, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
const LoadingPage = lazy(() => import("./LoadingPage"));
const Banner = lazy(() => import("../components/ProductsComponents/Banner"));
const FilterItems = lazy(() =>
  import("../components/ProductsComponents/FilterItems")
);
const ProductsGrid = lazy(() =>
  import("../components/ProductsComponents/ProductsGrid")
);

const ProductsList = lazy(() =>
  import("../components/ProductsComponents/ProductsList")
);

const ProductPage = () => {
  const { products } = useLoaderData();
  // const [layout, setLayout] = useState("grid");

  // const layoutHandler = (swapLayout) => {
  //   setLayout(swapLayout);
  //   console.log(swapLayout);
  // };
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner />
        <FilterItems />
        {/* <FilterItems swapLayout={layoutHandler} /> */}
        <Await resolve={products}>
          {(loaderProducts) => <ProductsGrid products={loaderProducts} />}
        </Await>
      </Suspense>
    </section>
  );
};
export default ProductPage;

async function loadProduct() {
  const response = await fetch("http://localhost:8080/products/");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch products." },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    const products = responseData.products;
    return products;
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  return defer({
    products: loadProduct(),
  });
}
