import React from "react";
import WinterCollection from "./WinterCollection";
import AutumnCollection from "./AutumnCollection";
import SummerCollection from "./SummerCollection";

const Collection = () => {
  return (
    <div className="w-full">
      <div className="pt-24 w-full max-w-[1450px] m-auto px-6 flex flex-col md:flex-row md:items-start items-center justify-between">
        <div className="flex flex-col items-start gap-8">
          <div className="w-[320px] h-[60px] bg-[#EDEDED] rounded-full flex items-center px-4 mt-32">
            <input
              type="text"
              placeholder="Qidiruv ...."
              className="flex-grow bg-transparent outline-none text-gray-700 text-sm"
            />
            <button className="w-[45px] h-[45px] rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-[24px] font-bold">To'plam</h1>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li>Barchasi</li>
            <li>Qishgi</li>
            <li>Kuzgi</li>
            <li>Yozgi</li>
          </ul>
        </div>
        <div className="">
          <WinterCollection />
          <AutumnCollection />
          <SummerCollection />
        </div>
      </div>
    </div>
  );
};

export default Collection;
