import { lazy } from "react";
import RootLayout from "./page/Root";
import DetailProduct from "./page/DetailProduct";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as ProductDetailLoader } from "./page/DetailProduct";
const HomePage = lazy(() => import("./page/HomePage"));
const ProductsPage = lazy(() => import("./page/ProductsPage"));
const ErrorPage = lazy(() => import("./page/ErrorPage"));
const ProductRoot = lazy(() => import("./page/ProductRoot"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () =>
          import("./page/HomePage").then((module) => module.loader()),
      },
      {
        path: "products",
        element: <ProductRoot />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: () =>
              import("./page/ProductsPage").then((module) => module.loader()),
          },
          {
            path: ":id",
            id: "product-detail",
            element: <DetailProduct />,
            loader: ProductDetailLoader,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
