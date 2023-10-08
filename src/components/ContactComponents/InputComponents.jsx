/* eslint-disable react/prop-types */
const InputComponents = (props) => {
  return (
    <div className="font-body flex flex-col gap-3">
      <h1 className="text-black text-base font-semibold">{props.title}</h1>
      <input
        className="px-6 py-4 border-2 border-neutral-300 rounded-lg "
        type="text"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
export default InputComponents;
