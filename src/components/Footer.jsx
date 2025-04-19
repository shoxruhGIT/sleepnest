import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-24">
      <div className="w-full max-w-[1450px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center px-4 py-10">
        {/* Logo va description */}
        <div className="flex flex-col gap-4 items-start">
          <a href="#">
            <img
              src={Logo}
              alt="logo of company"
              className="w-[200px] sm:w-[250px] lg:w-[300px]"
            />
          </a>
          <p className="text-[#908D8D] text-sm sm:text-base">
            “Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
            hisoblanadi.
          </p>
        </div>

        {/* Menyu */}
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-2xl font-bold">Menyu</h1>
          <ul className="footer-nav text-[#4E4E4E] flex flex-col gap-2">
            <li>
              <Link>{t("navbar.home")}</Link>
            </li>
            <li>
              <Link>{t("navbar.collection")}</Link>
            </li>
            <li>
              <Link>{t("navbar.about")}</Link>
            </li>
            <li>
              <Link>{t("navbar.contact")}</Link>
            </li>
          </ul>
        </div>

        {/* Kontaktlar */}
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-[18px] font-bold">Kontaktlar</h1>
          <p className="text-[#908D8D] italic text-sm sm:text-base">
            Buxoro, st. Alpomish 80. <br />
            Email: sleepnest@gamil.com <br />
            Telegram: sleepnest <br />
            +998 94 033 72 12
          </p>
        </div>

        {/* Obuna bo'lish */}
        <div className="flex flex-col items-start gap-6 justify-start w-full">
          <h1 className="text-base sm:text-lg">
            Elektron pochtamizga obuna bo'ling
          </h1>
          <div className="w-full max-w-[440px] h-[50px] border border-gray-400 rounded-full flex items-center overflow-hidden">
            <input
              type="email"
              placeholder="Elektron pochtamizga obuna bo‘ling"
              className="flex-grow h-full px-4 p-2 outline-none bg-transparent text-gray-700 text-sm"
            />
            <button className="h-full px-4 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition-colors duration-300">
              Obuna Bo‘ling
            </button>
          </div>

          <p className="text-[#908D8D] text-sm">
            Kamida bitta roʻyxatni tanlang.
          </p>
        </div>
      </div>

      <div className="w-full h-[85px] bg-black mt-[60px] flex">
        <div className="w-full max-w-[1450px] m-auto flex items-center justify-between">
          <p className="text-[#545454]">
            © 2024 MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
