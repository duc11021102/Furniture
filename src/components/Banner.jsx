/* eslint-disable react/prop-types */
import banner from "../assets/bannerproducts.webp";
const Banner = (props) => {
  return (
    <div className="w-full font-body relative flex justify-center items-center ">
      <h1 className="absolute z-10 text-black text-4xl sm:text-5xl font-semibold">
        {props.title}
      </h1>
      <img
        className="object-cover w-full h-36 sm:h-44 md:h-64 blur-sm"
        src={banner}
      ></img>
    </div>
  );
};
export default Banner;
