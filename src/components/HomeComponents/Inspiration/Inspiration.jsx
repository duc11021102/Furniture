import living from "../../../assets/interior.webp";
import bedroom from "../../../assets/imageItem.webp";
import dinning from "../../../assets/lamb.webp";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
const Inspiration = () => {
  const navigate = useNavigate();
  const showMoreHandler = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  return (
    <section className="w-full bg-stone-100">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="py-16 md:py-28 flex flex-col items-center md:pl-16 md:w-1/2">
          <h1 className="text-4xl font-bold text-center ">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-lg text-center font-medium text-gray-500 mt-4 max-w-sm">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button
            onClick={showMoreHandler}
            className="mt-8 px-6 py-3 w-44 text-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 ease-out duration-200"
          >
            Explore More
          </button>
        </div>
        <div className="text-center w-3/5 md:w-1/2">
          <div className="carousel carousel-center max-w-sm md:max-w-xs lg:max-w-xs px-10 py-8 space-x-4 rounded-box ">
            <img src={bedroom} className="rounded-box object-cover"></img>
            <img src={living} className="rounded-box object-cover "></img>
            <img src={dinning} className="rounded-box object-cover"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Inspiration;
