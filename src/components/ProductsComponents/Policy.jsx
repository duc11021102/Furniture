// BiBox, BiCheck, BiCheckShield, BiHeadphone,BiTrophy
import { BiTrophy } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import { BiHeadphone } from "react-icons/bi";

const Policy = () => {
  return (
    <section className="w-full bg-orange-50 py-16 mt-12 my-5">
      <div className="grid grid-cols-4">
        <div className="flex items-center justify-center gap-2">
          <BiTrophy className="text-5xl" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">High Quality</h1>
            <p className="text-base font-medium text-gray-500">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BiCheckShield className="text-5xl" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Warranty Protection</h1>
            <p className="text-base font-medium text-gray-500">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BiBox className="text-5xl" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Free Shipping</h1>
            <p className="text-base font-medium text-gray-500">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BiHeadphone className="text-5xl" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">24 / 7 Support</h1>
            <p className="text-base font-medium text-gray-500">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Policy;
