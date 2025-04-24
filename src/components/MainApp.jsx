import React from "react";
import Main from "./Main";
import WinterCollection from "./WinterCollection";
import { DivanAutumn, DivanSummer, DivanWinter } from "../assets";
import AutumnCollection from "./AutumnCollection";
import SummerCollection from "./SummerCollection";
import { useTranslation } from "react-i18next";
const MainApp = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-24">
      <Main />

      {/* Winter COllection */}

      <div className="relative w-full max-w-[1450px] m-auto mt-24 pt-80 xl:pt-20 px-6">
        <div className="w-full rounded-[30px] h-[600px] xl:h-[350px] bg-[#464351] flex flex-col sm:flex-row sm:items-end xl:items-center sm:justify-between items-center justify-end px-4 py-10 gap-10">
          {/* Chap taraf */}
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[60px] lg:text-[100px] font-bold leading-none">
              100%
            </h1>
            <span className="text-white text-[18px] mt-2">
              {t("bg_info.quality")}
            </span>
          </div>

          {/* Rasm */}
          <img
            src={DivanWinter}
            alt="divan"
            className="w-full max-w-[800px] xl:top-[-10%] top-[9%] md:left-[20%] object-contain absolute"
          />

          {/* O‘ng taraf */}
          <div className="flex flex-col gap-4 max-w-[400px] text-center lg:text-left">
            <h1 className="text-white text-[24px] lg:text-[30px] font-semibold leading-tight">
              {t("bg_info.title")}
            </h1>
            <p className="text-white text-[14px]">{t("bg_info.desc")}</p>
            <button className="w-[150px] h-[40px] bg-white text-black rounded-[15px] self-center lg:self-start">
              {t("bg_info.btn")}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center mb-32">
        <h1 className="text-[35px] font-bold">{t("winter_collection.title")}</h1>
        <p>{t("winter_collection.desc")}</p>
      </div>

      <WinterCollection />

      {/* End Winter Collection */}

      {/* Autumn Collection */}

      <div className="relative w-full max-w-[1450px] m-auto mt-24 pt-80 xl:pt-20 px-6">
        <div className="w-full rounded-[30px] h-[600px] xl:h-[350px] bg-[#7F54B3] flex flex-col sm:flex-row sm:items-end xl:items-center sm:justify-between items-center justify-end px-4 py-10 gap-10">
          {/* Chap taraf */}
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[60px] lg:text-[100px] font-bold leading-none">
              100%
            </h1>
            <span className="text-white text-[18px] mt-2">
              {t("bg_info.quality")}
            </span>
          </div>

          {/* Rasm */}
          <img
            src={DivanAutumn}
            alt="divan"
            className="w-full max-w-[800px] xl:top-[-10%] sm:top-[9%] top-0 md:left-[20%] object-contain absolute"
          />

          {/* O‘ng taraf */}
          <div className="flex flex-col gap-4 max-w-[400px] text-center lg:text-left">
            <h1 className="text-white text-[24px] lg:text-[30px] font-semibold leading-tight">
              {t("bg_info.title")}
            </h1>
            <p className="text-white text-[14px]">{t("bg_info.desc")}</p>
            <button className="w-[150px] h-[40px] bg-white text-black rounded-[15px] self-center lg:self-start">
              {t("bg_info.btn")}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center mb-32">
        <h1 className="text-[35px] font-bold">{t("autumn_collection.title")}</h1>
        <p>{t("autumn_collection.desc")}</p>
      </div>

      <AutumnCollection />

      {/* End Autumn Collection */}

      {/* Summer Collection */}

      <div className="relative w-full max-w-[1450px] m-auto mt-24 pt-80 xl:pt-20 px-6">
        <div className="w-full rounded-[30px] h-[600px] xl:h-[350px] bg-[#236F48] flex flex-col sm:flex-row sm:items-end xl:items-center sm:justify-between items-center justify-end px-4 py-10 gap-10">
          {/* Chap taraf */}
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[60px] lg:text-[100px] font-bold leading-none">
              100%
            </h1>
            <span className="text-white text-[18px] mt-2">{t("bg_info.quality")}</span>
          </div>

          {/* Rasm */}
          <img
            src={DivanSummer}
            alt="divan"
            className="w-full max-w-[800px] xl:top-[-10%] sm:top-[9%] top-0 md:left-[20%] object-contain absolute"
          />

          {/* O‘ng taraf */}
          <div className="flex flex-col gap-4 max-w-[400px] text-center lg:text-left">
            <h1 className="text-white text-[24px] lg:text-[30px] font-semibold leading-tight">
            {t("bg_info.title")}
            </h1>
            <p className="text-white text-[14px]">
            {t("bg_info.desc")}
            </p>
            <button className="w-[150px] h-[40px] bg-white text-black rounded-[15px] self-center lg:self-start">
            {t("bg_info.btn")}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center mb-32">
        <h1 className="text-[35px] font-bold">{t("summer_collection.title")}</h1>
        <p>{t("summer_collection.desc")}</p>
      </div>

      <SummerCollection />
    </div>
  );
};

export default MainApp;
