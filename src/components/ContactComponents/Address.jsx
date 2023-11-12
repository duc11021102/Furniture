import { FiMapPin } from "react-icons/fi";

const Address = () => {
  return (
    <div className="flex flex-row font-body gap-4    ">
      <FiMapPin className="text-2xl font-extrabold" />
      <div>
        <h1 className="font-bold text-lg sm:text-xl mb-2">Address</h1>
        <p className=" text-sm sm:text-base font-medium w-52">
          236 5th SE Avenue, New York NY10000, United States
        </p>
      </div>
    </div>
  );
};
export default Address;
