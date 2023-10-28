// import { lazy } from "react";
// import banner from "../../../assets/bg_sofa.webp";
// const banner = lazy(() => import("../../../assets/bg_sofa.webp"));
// import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className=" font-body relative bg-home-banner h-96
     object-cover bg-cover bg-center flex flex-col gap-4 justify-center items-center "
    >
      {/* <div className="absolute right-10 2xl:top-40 lg:top-20">
        <div className="px-10 py-8 bg-orange-100">
          <p className="text-lg font-bold">New Arrival</p>
          <h1 className="text-5xl max-w-md font-extrabold text-yellow-600 mt-8">
            Discover Our New Collection
          </h1>
          <p className="text-lg font-semibold max-w-lg mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-8 px-6 py-4 max-w-44 text-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 ease-out duration-200">
            Buy Now
          </button>
        </div>
      </div> */}
      {/* <img className="object-cover w-full h-96 " src={banner}></img>   */}
      <h1 className="text-5xl  font-extrabold text-white ">
        <span className="text-yellow-500">FURNITURE</span> COLLECTION
      </h1>

      <p className="text-lg font-light text-white">
        WE ARE IN THE INDUSTRY IN 1890
      </p>
    </div>
  );
};
export default Banner;
