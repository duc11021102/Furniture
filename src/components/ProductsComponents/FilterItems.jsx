/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
const FilterItems = (props) => {
  const [layout, setLayout] = useState("grid");
  return (
    <section className="w-full px-8 lg:px-20 py-6 bg-orange-50 flex justify-between font-body">
      <div className="flex items-center justify-center gap-4">
        <div className="flex font-medium items-center justify-center gap-5 border-r-2 border-black pr-4">
          <CiSliderHorizontal className="hidden md:block text-2xl" />
          <p className="hidden md:block text-base font-medium ">Filter</p>
          <FiGrid
            onClick={() => {
              setLayout("grid");
              props.swapLayout("grid");
            }}
            className={
              layout === "grid"
                ? "text-2xl bg-orange-300 text-white rounded-sm p-1 ease-out duration-200"
                : "text-2xl ease-out duration-200"
            }
          />
          <FiMenu
            onClick={() => {
              setLayout("list");
              props.swapLayout("list");
            }}
            className={
              layout === "list"
                ? "text-2xl bg-orange-300 text-white rounded-sm p-1 ease-out duration-200"
                : "text-2xl ease-out duration-200"
            }
          />
        </div>
        <p className=" text-base font-medium ">Showing 1–11 of 11 results</p>
      </div>
      <div className="flex text-lg font-medium items-center justify-center gap-5">
        <p className="text-base font-medium">Sort By</p>
        <input
          placeholder="Default"
          className="w-40 text-black text-base px-4  h-10 bg-white border-2 border-gray-200 "
        ></input>
      </div>
    </section>
  );
};
export default FilterItems;
