import { FiWatch } from "react-icons/fi";
const WorkingTime = () => {
  return (
    <div className="flex flex-row font-body gap-4  ">
      <FiWatch className="text-2xl font-extrabold" />
      <div>
        <h1 className="font-bold text-xl mb-2">Working Time</h1>
        <p className=" text-base font-medium w-52">
          Monday-Friday: 9:00 - 22:00
        </p>
        <p className=" text-base font-medium w-52">
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>
    </div>
  );
};
export default WorkingTime;
