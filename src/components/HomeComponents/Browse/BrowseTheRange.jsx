import living from "../../../assets/interior.webp";
import bedroom from "../../../assets/imageItem.webp";
import dinning from "../../../assets/lamb.webp";

const BrowseTheRange = () => {
  return (
    <section className="px-8 py-14 font-body">
      <div className="text-center">
        <h1 className="sm:text-3xl md:text-4xl font-bold">Browse The Range</h1>
        <p className="sm:text-base md:text-lg font-medium text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-row justify-center sm:gap-6 md:gap-12 lg:gap-16 xl:gap-20 mt-10">
          <div className="sm:w-44 md:w-44 lg:w-60 xl:w-72 2xl:w-72">
            <img
              src={dinning}
              className="w-full sm:h-56 md:h-64 lg:h-72 2xl:h-96 object-cover rounded-xl"
            />
            <p className="text-xl font-extrabold mt-4">Dinning</p>
          </div>

          <div className=" sm:w-44 md:w-44 lg:w-60 xl:w-72 2xl:w-72">
            <img
              src={living}
              className="w-full sm:h-56 md:h-64 lg:h-72 2xl:h-96 object-cover rounded-xl"
            />
            <p className="text-xl font-extrabold mt-4">Living</p>
          </div>

          <div className=" sm:w-44 md:w-44 lg:w-60 xl:w-72 2xl:w-72">
            <img
              src={bedroom}
              className="w-full sm:h-56 md:h-64 lg:h-72 2xl:h-96 object-cover rounded-xl"
            />
            <p className="text-xl font-extrabold mt-4">Bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BrowseTheRange;
