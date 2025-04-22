import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../hooks/useWishlist";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const { count } = useWishlist();

  return (
    <div className="w-full h-[80px] shadow-md flex fixed z-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2.5 max-w-[1450px] m-auto flex justify-between items-center">
        <Link to="/">
          <img
            className="w-[120px] sm:w-[180px]"
            src={Logo}
            alt="there is logo"
          />
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex items-center gap-6 text-xl font-light">
            <li>
              <Link className="focus:font-medium focus:text-[#A17F4A]" to="/">
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                className="focus:font-medium focus:text-[#A17F4A]"
                to="/collection"
              >
                {t("navbar.collection")}
              </Link>
            </li>
            <li>
              <Link
                className="focus:font-medium focus:text-[#A17F4A]"
                to="/about"
              >
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link
                className="focus:font-medium focus:text-[#A17F4A]"
                to="/contact"
              >
                {t("navbar.contact")}
              </Link>
            </li>
            <li className="relative">
              <Link to="/wishlist" className="text-red-600 text-xl">
                <FaHeart />{" "}
                <span className="text-white absolute top-[-8px] right-[-10px] w-[20px] h-[15px] bg-black text-[12px] rounded-[50%] flex items-center justify-center">
                  {count}
                </span>
              </Link>
            </li>
          </ul>

          <select
            onChange={handleChangeLanguage}
            name="language"
            id="language"
            defaultValue={i18n.language}
            className="bg-[#A17F4A] outline-none rounded sm:w-[80px] sm:h-[40px] sm:px-4 sm:font-bold text-[#ffffff]"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button className="lg:hidden flex flex-col gap-2">
            <div className="w-[20px] h-[2px] bg-black"></div>
            <div className="w-[10px] h-[2px] bg-black"></div>
            <div className="w-[20px] h-[2px] bg-black"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
