import banner from "../../assets/bannerproducts.webp";
const Banner = () => {
  return (
    <div className="w-full font-body relative flex justify-center items-center ">
      <h1 className="absolute z-10 text-black text-5xl font-semibold">About</h1>
      <img className="object-cover w-full h-64 blur-sm" src={banner}></img>
    </div>
  );
};
export default Banner;