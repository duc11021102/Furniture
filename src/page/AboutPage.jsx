import { Suspense } from "react";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";
import Policy from "../components/Policy";
const AboutPage = () => {
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner title="About" />
        <Policy />
      </Suspense>
    </section>
  );
};
export default AboutPage;
