import living from "../../../assets/interior.webp";
import bedroom from "../../../assets/imageItem.webp";
import dinning from "../../../assets/lamb.webp";

const BrowseTheRange = () => {
  return (
    <section className="px-8 py-14 font-body">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Browse The Range</h1>
        <p className="text-lg font-medium text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-row justify-center gap-20 mt-10">
          <div className="w-72">
            <img src={dinning} className=" w-72 h-96 object-cover rounded-xl" />
            <p className="text-xl font-extrabold mt-4">Dinning</p>
          </div>
          <div className="w-72">
            <img src={living} className=" w-72 h-96 object-cover rounded-xl" />
            <p className="text-xl font-extrabold mt-4">Living</p>
          </div>
          <div className="w-72">
            <img src={bedroom} className=" w-72 h-96 object-cover rounded-xl" />
            <p className="text-xl font-extrabold mt-4">Bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BrowseTheRange;
