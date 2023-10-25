import Contact from "../components/ContactComponents/Contact";
import Tittle from "../components/ContactComponents/Tittle";
import LoadingPage from "./LoadingPage";
import { Suspense } from "react";
import Banner from "../components/Banner";
import Policy from "../components/Policy";
const ContactPage = () => {
  return (
    <section className="w-full">
      <Suspense fallback={<LoadingPage />}>
        <Banner title="Contact" />
        <Tittle />
        <Contact />
        <Policy />
      </Suspense>
    </section>
  );
};
export default ContactPage;
