import Banner from "../components/ContactComponents/Banner";
import Contact from "../components/ContactComponents/Contact";
import Tittle from "../components/ContactComponents/Tittle";
import LoadingPage from "./LoadingPage";
import Policy from "../components/ProductsComponents/Policy";
import { Suspense } from "react";
const ContactPage = () => {
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner />
        <Tittle />
        <Contact />
        <Policy />
      </Suspense>
    </section>
  );
};
export default ContactPage;
