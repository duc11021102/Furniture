/* eslint-disable react-refresh/only-export-components */
import { json, useSearchParams, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthenticationComponents/AuthForm";
import { Suspense } from "react";
import LoadingPage from "./LoadingPage";
import Policy from "../components/Policy";

const AuthenticationPage = () => {
  const [searchParams] = useSearchParams(); // Hook useSearchParams được sử dụng để đọc và sửa đổi chuỗi truy vấn trong URL cho vị trí hiện tại
  const mode = searchParams.get("mode"); // check xem đang là trang login hay signin
  const navigate = useNavigate();

  // fecth
  async function handlerAuthData(email, password) {
    const authData = {
      email: email,
      password: password,
    };
    const response = await fetch("http://localhost:8080/" + mode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData), // JSON.stringify dùng để chuyển đối tượng javascript sang thành 1 chuỗi json
    });
    if (response.status === 422 || response.status === 401) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
    const resData = await response.json();
    const token = resData.token;

    // luu thong tin dang nhap trong localstorage
    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1); // token het han trong 1h
    localStorage.setItem("expiration", expiration.toISOString());
    console.log(token);
    navigate("/");
  }
  return (
    <Suspense fallback={<LoadingPage />}>
      <AuthForm authData={handlerAuthData} />
      <Policy />
    </Suspense>
  );
};
export default AuthenticationPage;

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams;
// new URL(request.url) cho phép truy cập thông tin từ URL, chẳng hạn như phần truy vấn, phần định danh, và các phần khác của URL.
// .searchParams cho phép truy cập vào phần truy vấn của URL(query parameters)
// http://127.0.0.1:5173/auth?mode=signin
// theo url trên thì  searchParams.get('mode') sẽ trả về sigin
//   const mode = searchParams.get("mode") || "login"; // nếu tham số mode k tồn tại  , hoặc nếu trả về giá  trị null thì sẽ sử dụng giá trị mặc đinh là "login"
//   if (mode !== "login " && mode !== "signin") {
//     throw json({ message: "Unsupported mode." }, { status: 422 });
//   }
//   const data = await request.formData();
//   const authData = {
//     email: data.get("email"),
//     password: data.get("password"),
//   };
//   console.log(authData);
//   const response = await fetch("http://localhost:8080/" + mode, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(authData), // JSON.stringify dùng để chuyển đối tượng javascript sang thành 1 chuỗi json
//   });
//   if (response.status === 422 || response.status === 401) {
//     return response;
//   }
//   if (!response.ok) {
//     throw json({ message: "Could not authenticate user." }, { status: 500 });
//   }
//   const resData = await response.json();
//   const token = resData.token;
//   console.log(token);
//   return redirect("/products");
// }
