/* eslint-disable react/prop-types */
const AuthButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`px-3 py-3 mt-3 text-sm w-full ${props.text} font-semibold ${props.background} 
      rounded-md hover:${props.backgroundHover} ease-out duration-200`}
    >
      {props.title}
    </button>
  );
};
export default AuthButton;
