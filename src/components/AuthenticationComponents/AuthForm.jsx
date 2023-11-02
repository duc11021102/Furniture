/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import InputPassword from "./InputPassword";
import InputText from "./InputText";
import AuthButton from "./AuthButton";
const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams(); // Hook useSearchParams được sử dụng để đọc và sửa đổi chuỗi truy vấn trong URL cho vị trí hiện tại
  const isLogin = searchParams.get("mode") === "login";
  // to={"/abc"} thì sẽ link đến  localhost:5173/abc
  // to={"abc"} thì sẽ link đến  localhost:5173/url hiện tại/abc
  // const data = useActionData();
  // useActionData() dùng cho validation errors
  // const navigation = useNavigation();
  /**send data to parent component */
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (email === "" || password === "") {
        return;
      }
      props.authData(email, password);
    },
    [email, password, props]
  );
  return (
    <div className="font-body w-full flex justify-center py-10">
      <Form method="post" className="w-96  px-8 py-6 rounded-md shadow-2xl">
        <h1 className="text-2xl font-bold text-center my-2">
          {isLogin ? "Login" : "Signin"}
        </h1>
        {!isLogin && (
          <InputText
            type="username"
            id="username"
            name="username"
            placeholder="Username"
          ></InputText>
        )}
        <InputText
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></InputText>
        <InputPassword
          placeholder={"Password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isLogin && (
          <p className="text-sm text-center mt-2 text-yellow-600 hover:underline">
            Forgot password?
          </p>
        )}
        <AuthButton
          type="submit"
          onClick={submitHandler}
          background={"bg-yellow-600"}
          text={"text-white"}
          backgroundHover={"bg-yellow-700"}
          title={isLogin ? "Login" : "Signin"}
        ></AuthButton>
        <p className="text-center font-medium mt-2">
          <span className="text-sm  text-black">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
          </span>{" "}
          <Link
            to={`?mode=${isLogin ? "signin" : "login"}`}
            className="text-sm  text-yellow-600 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </Link>
        </p>
        <p className="text-sm text-center my-3 font-medium">Or</p>
        <AuthButton
          onClick={(e) => {
            e.preventDefault();
          }}
          type="button"
          background={"bg-blue-600"}
          text={"text-white"}
          backgroundHover={"bg-blue-700"}
          title={"Login with Facebook"}
        ></AuthButton>
        <AuthButton
          onClick={(e) => {
            e.preventDefault();
          }}
          type="button"
          background={"bg-red-600"}
          text={"text-white"}
          backgroundHover={"bg-red-700"}
          title={"Login with Google"}
        ></AuthButton>
      </Form>
    </div>
  );
};
export default AuthForm;
