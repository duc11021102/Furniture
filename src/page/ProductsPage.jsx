/* eslint-disable react/prop-types */
import { lazy, useState, useEffect, useCallback } from "react";
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
const Policy = lazy(() => import("../components/ProductsComponents/Policy"));

const ProductPage = () => {
  const { products } = useLoaderData();
  const [layout, setLayout] = useState("grid");

  const swapLayoutHandler = useCallback((layout) => {
    console.log(layout);
    setLayout(layout);
  }, []);

  // scroll to top when render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner />
        <FilterItems swapLayout={swapLayoutHandler} />
        <Await resolve={products}>
          {layout === "grid"
            ? (loaderProducts) => <ProductsGrid products={loaderProducts} />
            : (loaderProducts) => <ProductsList products={loaderProducts} />}
        </Await>
        <Policy />
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
