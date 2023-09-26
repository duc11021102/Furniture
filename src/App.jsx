import { lazy } from "react";
import RootLayout from "./page/Root";
const HomePage = lazy(() => import("./page/HomePage"));
const ProductsPage = lazy(() => import("./page/ProductsPage"));
const ErrorPage = lazy(() => import("./page/ErrorPage"));
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        path: "/products",
        element: <ProductsPage />,
        loader: () =>
          import("./page/ProductsPage").then((module) => module.loader()),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
