/* eslint-disable react/prop-types */
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useCallback } from "react";
const InputPassword = (props) => {
  const [isShow, setIsShow] = useState(false);

  const showPasswordHandler = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <div
      className="px-3 py-2 flex flex-row justify-center items-center border-2 
    border-neutral-300 mt-3 rounded-md focus-within:border-2 focus-within:border-black"
    >
      <input
        className="w-full rounded-md border-0 outline-none"
        type={isShow ? "text" : "password"}
        name="password"
        id="password"
        required
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
      {isShow ? (
        <FiEye
          onClick={showPasswordHandler}
          className="text-xl text-neutral-500"
        />
      ) : (
        <FiEyeOff
          onClick={showPasswordHandler}
          className="text-xl text-neutral-500"
        />
      )}
    </div>
  );
};
export default InputPassword;
