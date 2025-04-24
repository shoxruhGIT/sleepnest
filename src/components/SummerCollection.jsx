import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useWishlist } from "../hooks/useWishlist";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SummerCollection = () => {
  const { t } = useTranslation();

  const summerCollection = [
    {
      id: 21,
      img: "https://www.sleepnest.uz/assets/productImg21-C-p6aOaW.jpg",
      title: t("summer_collection.collections.1"),
      category: t("categories.summer"),
    },
    {
      id: 22,
      img: "https://www.sleepnest.uz/assets/productImg22-emL6vfU-.jpg",
      title: t("summer_collection.collections.2"),
      category: t("categories.summer"),
    },
    {
      id: 23,
      img: "https://www.sleepnest.uz/assets/productImg23-CL7pBMvF.jpg",
      title: t("summer_collection.collections.3"),
      category: t("categories.summer"),
    },
    {
      id: 24,
      img: "https://www.sleepnest.uz/assets/productImg24-B1gnyX0U.jpg",
      title: t("summer_collection.collections.4"),
      category: t("categories.summer"),
    },
    {
      id: 25,
      img: "https://www.sleepnest.uz/assets/productImg25-BvXKeYJI.jpg",
      title: t("summer_collection.collections.5"),
      category: t("categories.summer"),
    },
    {
      id: 26,
      img: "https://www.sleepnest.uz/assets/productImg26--z9MeTTg.jpg",
      title: t("summer_collection.collections.6"),
      category: t("categories.summer"),
    },
    {
      id: 27,
      img: "https://www.sleepnest.uz/assets/productImg27-DsTk7fxd.jpg",
      title: t("summer_collection.collections.7"),
      category: t("categories.summer"),
    },
    {
      id: 28,
      img: "https://www.sleepnest.uz/assets/productImg28-DaHXHjbW.jpg",
      title: t("summer_collection.collections.8"),
      category: t("categories.summer"),
    },
    {
      id: 29,
      img: "https://www.sleepnest.uz/assets/productImg29-UBLglkL9.jpg",
      title: t("summer_collection.collections.9"),
      category: t("categories.summer"),
    },
    {
      id: 30,
      img: "https://www.sleepnest.uz/assets/productImg30-DXgEC2ST.jpg",
      title: t("summer_collection.collections.10"),
      category: t("categories.summer"),
    },
  ];

  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="w-full">
      <div className="w-full max-w-[1450px] m-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 place-items-center">
          {summerCollection.map((item) => (
            <div
              key={item.id}
              className="relative w-full max-w-[240px] h-[260px] flex flex-col gap-4 group hover:text-red-500 duration-300"
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

export default SummerCollection;
