import { NavLink, useLocation } from "react-router-dom";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FcBrokenLink } from "react-icons/fc";
const MainNavigation = () => {
  const navlink = [
    { link: "/", text: "Home" },
    { link: "/products", text: "Shop" },
    { link: "/about", text: "About" },
    { link: "/contact", text: "Contact" },
  ];
  const location = useLocation();
  const active = "font-semibold  text-gray-400 ease-out duration-200";
  const notActive = "font-semibold  hover:text-gray-400 ease-out duration-200";
  return (
    <header className="w-full font-body py-5 px-10 flex justify-between items-center">
      <div className=" flex gap-4 items-center ">
        <FcBrokenLink className="text-4xl" />
        <NavLink to="/" className=" font-bold font-body text-4xl">
          Furniro
        </NavLink>
      </div>

      <ul className="flex gap-10 ">
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

      <div className=" flex gap-10">
        <NavLink
          className={location.pathname === "/auth" ? active : notActive}
          to="/auth?mode=login"
        >
          <FiUser className="text-2xl" />
        </NavLink>
        <NavLink className="hover:text-gray-400 ease-out duration-200" to="/">
          <FiHeart className="text-2xl" />
        </NavLink>
        <NavLink
          className={location.pathname === "/cart" ? active : notActive}
          to="/cart"
        >
          <FiShoppingCart className="text-2xl" />
        </NavLink>
      </div>
    </header>
  );
};
export default MainNavigation;
