import { NavLink, useLocation } from "react-router-dom";
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiAlignJustify,
} from "react-icons/fi";
import { FcBrokenLink } from "react-icons/fc";
const MainNavigation = () => {
  const navlink = [
    { link: "/", text: "Home" },
    { link: "/products", text: "Shop" },
    { link: "/about", text: "About" },
    { link: "/contact", text: "Contact" },
  ];
  const location = useLocation();
  const active =
    "hidden md:block font-semibold  text-gray-400 ease-out duration-200";
  const notActive =
    "hidden md:block font-semibold  hover:text-gray-400 ease-out duration-200";
  return (
    <header className="w-full font-body py-5 px-4 md:px-6 lg:px-10 flex justify-between items-center">
      <div className=" flex gap-4 items-center ">
        <FcBrokenLink className="text-4xl" />
        <NavLink to="/" className=" font-bold font-body text-4xl">
          Furniro
        </NavLink>
        <FiAlignJustify className="text-2xl md:hidden" />
      </div>
      <ul className="hidden md:flex md:gap-6 lg:gap-10 ">
        {navlink.map((link) => (
          <li className="flex items-center" key={link.text}>
            <NavLink
              className={location.pathname === link.link ? active : notActive}
              to={link.link}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-10">
        <NavLink
          className={location.pathname === "/auth" ? active : notActive}
          to="/auth?mode=login"
        >
          <FiUser className="text-2xl" />
        </NavLink>
        <NavLink
          className="hidden md:block hover:text-gray-400 ease-out duration-200"
          to="/"
        >
          <FiHeart className="text-2xl" />
        </NavLink>
        <NavLink
          className={
            location.pathname === "/cart"
              ? " font-semibold  text-gray-400 ease-out duration-200"
              : " font-semibold  hover:text-gray-400 ease-out duration-200"
          }
          to="/cart"
        >
          <FiShoppingCart className="text-2xl" />
        </NavLink>
      </div>
    </header>
  );
};
export default MainNavigation;
