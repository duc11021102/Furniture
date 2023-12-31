import { Suspense } from "react";
import Directional from "../components/ProductDetailComponents/Directional";
import ProductItem from "../components/ProductDetailComponents/ProductItem";
import { json, defer, Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import Description from "../components/ProductDetailComponents/Description";
import Policy from "../components/Policy";
const DetailProduct = () => {
  const { product } = useLoaderData();
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Directional product={product} />
        <Await resolve={product}>
          {(loaderProduct) => (
            <ProductItem product={loaderProduct}></ProductItem>
          )}
        </Await>
        <Description />
        <Policy />
      </Suspense>
    </>
  );
};
export default DetailProduct;

async function loadProduct(id) {
  const response = await fetch(
    `https://be-furrniture.onrender.com/api/products/` + id
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch product." },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    const product = await responseData.product;
    return product;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const id = params.id;
  return defer({
    product: await loadProduct(id),
  });
}
