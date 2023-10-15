/* eslint-disable react/prop-types */
const InputText = (props) => {
  return (
    <input
      className="px-3 py-2 w-full border-2 border-neutral-300 rounded-md mt-3 "
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      required
      onChange={props.onChange}
    ></input>
  );
};
export default InputText;
