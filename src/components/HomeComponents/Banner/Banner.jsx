import banner from "../../../assets/bg_sofa.webp";
const Banner = () => {
  return (
    <div className="w-full font-body relative">
      <div className="absolute right-10 top-32">
        <div className="px-10 py-8 bg-orange-100">
          <p className="text-lg font-bold">New Arrival</p>
          <h1 className="text-5xl max-w-md font-extrabold text-yellow-600 mt-8">
            Discover Our New Collection
          </h1>
          <p className="text-lg font-semibold max-w-lg mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-8 px-6 py-4 w-44 text-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 ease-out duration-200">
            Buy Now
          </button>
        </div>
      </div>

      <img className="object-cover w-full" src={banner}></img>
    </div>
  );
};
export default Banner;
