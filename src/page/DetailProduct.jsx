import { Suspense } from "react";
import Directional from "../components/ProductDetailComponents/Directional";
import ProductItem from "../components/ProductDetailComponents/ProductItem";
import { json, defer, Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import LoadingPage from "./LoadingPage";
const DetailProduct = () => {
  const { product } = useLoaderData();
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Directional />
        <Await resolve={product}>
          {(loaderProduct) => (
            <ProductItem product={loaderProduct}></ProductItem>
          )}
        </Await>
      </Suspense>
    </>
  );
};
export default DetailProduct;

async function loadProduct(id) {
  const response = await fetch(`http://localhost:8080/products/` + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch product." },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    const product = responseData.product;
    return product;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    product: await loadProduct(id),
  });
}
