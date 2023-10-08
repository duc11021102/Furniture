/* eslint-disable react/prop-types */
const AreaComponents = (props) => {
  return (
    <div className="font-body flex flex-col gap-3">
      <h1 className="text-black text-base font-semibold">{props.title}</h1>
      <textarea
        rows="5"
        className="px-6 py-4 border-2 border-neutral-300 rounded-lg"
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
};
export default AreaComponents;
