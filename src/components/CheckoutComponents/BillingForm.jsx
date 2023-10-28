/* eslint-disable react/prop-types */
const BillingForm = (props) => {
  return (
    <div className="font-body flex flex-col gap-2 w-full">
      <h1 className="text-black text-base font-semibold">{props.title}</h1>
      <input
        className="px-4 py-2 border-2 border-neutral-300 rounded-md w-full"
        type="text"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
export default BillingForm;
