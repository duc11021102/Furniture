import { lazy } from "react";
import { json, defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
const BrowseTheRange = lazy(() =>
  import("../components/HomeComponents/Browse/BrowseTheRange")
);
const Banner = lazy(() => import("../components/HomeComponents/Banner/Banner"));
const Products = lazy(() =>
  import("../components/HomeComponents/Products/Products")
);
const Inspiration = lazy(() =>
  import("../components/HomeComponents/Inspiration/Inspiration")
);
const Share = lazy(() => import("../components/HomeComponents/Share/Share"));
const LoadingPage = lazy(() => import("./LoadingPage"));

const HomePage = () => {
  // Await dùng để chờ đợi cho dữ liệu đc giải quyết trước khi hiển thị giao diện người dùng
  // useLoaderData cho phép bạn truy cập dữ liệu được tải bởi một loader, được sử dụng để tải dữ liệu trước khi thành phần được render.
  // useLoaderData trả về dữ liệu được tải bởi loader của route hiện tại
  // defer cho phép bạn trì hoãn việc tải dữ liệu hoặc tính toán tốn thời gian cho đến khi thành phần được render
  // defer giúp cải thiện hiệu suất và trải nghiệm người dùng
  const { products } = useLoaderData();
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner />
        <BrowseTheRange />
        <Await resolve={products}>
          {(loadedProducts) => <Products products={loadedProducts}></Products>}
        </Await>
        <Inspiration />
        <Share />
      </Suspense>
    </section>
  );
};
export default HomePage;

async function loadProduct() {
  const response = await fetch(
    "https://be-furrniture.onrender.com/api/products"
  );
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
