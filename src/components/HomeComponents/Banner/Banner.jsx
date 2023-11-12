// import { lazy } from "react";
// import banner from "../../../assets/bg_sofa.webp";
// const banner = lazy(() => import("../../../assets/bg_sofa.webp"));
// import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className=" font-body flex flex-col 
      gap-4 justify-center items-center 
     bg-home-banner h-44 sm:h-64 md:h-96
     object-cover bg-cover bg-center "
    >
      <h1 className="hidden sm:block sm:text-3xl md:text-5xl font-extrabold text-white ">
        <span className="text-yellow-500">FURNITURE</span> COLLECTION
      </h1>

      <p className=" hidden sm:block text-lg font-light text-white">
        WE ARE IN THE INDUSTRY IN 1890
      </p>
    </div>
  );
};
export default Banner;
