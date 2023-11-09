import { Outlet } from "react-router-dom";
import { lazy } from "react";
const MainNavigation = lazy(() =>
  import("../components/NavBarComponents/MainNavigation")
);
const MainFooter = lazy(() =>
  import("../components/FooterComponents/MainFooter")
);
const Root = () => {
  return (
    <div className="w-full">
      <MainNavigation />
      <main className="w-full">
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};
export default Root;
