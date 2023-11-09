// import { lazy } from "react";
// import banner from "../../../assets/bg_sofa.webp";
// const banner = lazy(() => import("../../../assets/bg_sofa.webp"));
// import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className=" font-body relative bg-home-banner h-64 md:h-96
     object-cover bg-cover bg-center flex flex-col gap-4 justify-center items-center "
    >
      <h1 className=" sm:text-3xl md:text-5xl font-extrabold text-white ">
        <span className="text-yellow-500">FURNITURE</span> COLLECTION
      </h1>

      <p className="text-lg font-light text-white">
        WE ARE IN THE INDUSTRY IN 1890
      </p>
    </div>
  );
};
export default Banner;
