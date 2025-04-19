import React from "react";
import Main from "./Main";
import WinterCollection from "./WinterCollection";
import { DivanAutumn, DivanSummer, DivanWinter } from "../assets";
import AutumnCollection from "./AutumnCollection";
import SummerCollection from "./SummerCollection";
const MainApp = () => {
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
            <span className="text-white text-[18px] mt-2">Material sifati</span>
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
              "Ekologik Toza Uyqu Mahsulotlari"
            </h1>
            <p className="text-white text-[14px]">
              Ko‘p yillar davomida butun dunyoda foydalanish uchun paxta
              matolarini ishlab chiqaradigan kompaniya bo‘lib kelgan
            </p>
            <button className="w-[150px] h-[40px] bg-white text-black rounded-[15px] self-center lg:self-start">
              To‘plam
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center mb-32">
        <h1 className="text-[35px] font-bold">Qish kolleksiyasi</h1>
        <p>Ekologik Toza Uyqu Mahsulotlari</p>
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
            <span className="text-white text-[18px] mt-2">Material sifati</span>
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
              "Ekologik Toza Uyqu Mahsulotlari"
            </h1>
            <p className="text-white text-[14px]">
              Ko‘p yillar davomida butun dunyoda foydalanish uchun paxta
              matolarini ishlab chiqaradigan kompaniya bo‘lib kelgan
            </p>
            <button className="w-[150px] h-[40px] bg-white text-black rounded-[15px] self-center lg:self-start">
              To‘plam
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center mb-32">
        <h1 className="text-[35px] font-bold">Kuz kolleksiyasi</h1>
        <p>Ekologik Toza Uyqu Mahsulotlari</p>
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
            <span className="text-white text-[18px] mt-2">Material sifati</span>
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
              "Ekologik Toza Uyqu Mahsulotlari"
            </h1>
            <p className="text-white text-[14px]">
              Ko‘p yillar davomida butun dunyoda foydalanish uchun paxta
              matolarini ishlab chiqaradigan kompaniya bo‘lib kelgan
            </p>
            <button className="w-[150px] h-[40px] bg-white text-black rounded-[15px] self-center lg:self-start">
              To‘plam
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center mb-32">
        <h1 className="text-[35px] font-bold">Kuz kolleksiyasi</h1>
        <p>Ekologik Toza Uyqu Mahsulotlari</p>
      </div>

      <SummerCollection />
    </div>
  );
};

export default MainApp;
