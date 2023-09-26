import living from "../../../assets/interior.webp";
import bedroom from "../../../assets/imageItem.webp";
import dinning from "../../../assets/lamb.webp";

const Inspiration = () => {
  return (
    <section className="w-full bg-stone-100">
      <div className="flex flex-row items-center ">
        <div className="py-28 pl-16 flex flex-col items-center w-1/2">
          <h1 className="text-4xl font-bold ">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-lg text-center font-medium text-gray-500 mt-4 max-w-sm">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="mt-8 px-6 py-3 w-44 text-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 ease-out duration-200">
            Explore More
          </button>
        </div>
        <div className="text-center w-1/2">
          <div className="carousel carousel-center max-w-sm px-10 py-8 space-x-4 rounded-box ">
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
