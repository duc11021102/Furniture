import { Suspense } from "react";
import LoadingPage from "./LoadingPage";
import Banner from "../components/AboutComponents/Banner";
import Policy from "../components/ProductsComponents/Policy";
const AboutPage = () => {
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner />
        <Policy />
      </Suspense>
    </section>
  );
};
export default AboutPage;
