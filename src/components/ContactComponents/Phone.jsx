import { FiPhone } from "react-icons/fi";

const Phone = () => {
  return (
    <div className="flex flex-row font-body gap-4    ">
      <FiPhone className="text-2xl font-extrabold" />
      <div>
        <h1 className="font-bold text-xl mb-2">Phone</h1>
        <p className=" text-base font-medium w-52">Mobile: +(84) 546-6789</p>
        <p className=" text-base font-medium w-52">Hotline: +(84) 456-6789</p>
      </div>
    </div>
  );
};
export default Phone;
