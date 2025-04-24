import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import { useTranslation } from "react-i18next";

const WinterCollection = () => {
  const { t } = useTranslation();

  const winterCollection = [
    {
      id: 1,
      img: "https://www.sleepnest.uz/assets/productImg1-DUY0b_Wm.jpg",
      title: t("winter_collection.collections.1"),
      category: t("categories.winter"),
    },
    {
      id: 2,
      img: "https://www.sleepnest.uz/assets/productImg2-DOPfHc9I.jpg",
      title: t("winter_collection.collections.2"),
      category: t("categories.winter"),
    },
    {
      id: 3,
      img: "https://www.sleepnest.uz/assets/productImg3-BxeyfoJM.jpg",
      title: t("winter_collection.collections.3"),
      category: t("categories.winter"),
    },
    {
      id: 4,
      img: "https://www.sleepnest.uz/assets/productImg4-CcK4oVXm.jpg",
      title: t("winter_collection.collections.4"),
      category: t("categories.winter"),
    },
    {
      id: 5,
      img: "https://www.sleepnest.uz/assets/productImg5-CpnXLhLk.jpg",
      title: t("winter_collection.collections.5"),
      category: t("categories.winter"),
    },
    {
      id: 6,
      img: "https://www.sleepnest.uz/assets/productImg6-nwrmBsNI.jpg",
      title: t("winter_collection.collections.6"),
      category: t("categories.winter"),
    },
    {
      id: 7,
      img: "https://www.sleepnest.uz/assets/productImg7-CzuWUAcD.jpg",
      title: t("winter_collection.collections.7"),
      category: t("categories.winter"),
    },
    {
      id: 8,
      img: "https://www.sleepnest.uz/assets/productImg8-Beqegxf-.jpg",
      title: t("winter_collection.collections.8"),
      category: t("categories.winter"),
    },
    {
      id: 9,
      img: "https://www.sleepnest.uz/assets/productImg9-DP-likxW.jpg",
      title: t("winter_collection.collections.9"),
      category: t("categories.winter"),
    },
    {
      id: 10,
      img: "https://www.sleepnest.uz/assets/productImg10-CJbpkbvq.jpg",
      title: t("winter_collection.collections.10"),
      category: t("categories.winter"),
    },
  ];

  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="w-full">
      <div className="w-full max-w-[1450px] m-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 place-items-center">
          {winterCollection.map((item) => (
            <div
              key={item.id}
              className="relative w-full max-w-[240px] h-[260px] flex flex-col gap-4 group hover:text-red-500 duration-300 z-0"
            >
              <div className="overflow-hidden rounded-[15px]">
                <Link to={`/product/${item.id}`}>
                  <img
                    className="w-full h-[180px] object-cover rounded-[15px] transform transition-transform duration-300 group-hover:scale-105"
                    src={item.img}
                    alt={item.title}
                  />
                </Link>
              </div>

              <button
                onClick={() => toggleWishlist(item)}
                className={`absolute top-2 right-2 w-[40px] h-[40px] rounded-full bg-[#D4D4D4] text-[#FF0000] text-xl flex items-center justify-center shadow-md cursor-pointer z-10`}
              >
                {isInWishlist(item.id) ? (
                  <span className="text-red-500">❤️</span>
                ) : (
                  <span className="text-gray-400">🤍</span>
                )}
              </button>

              <h1 className="text-center text-[16px] font-medium">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCollection;
