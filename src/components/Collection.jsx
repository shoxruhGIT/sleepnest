import React, { useState } from "react";
import WinterCollection from "./WinterCollection";
import AutumnCollection from "./AutumnCollection";
import SummerCollection from "./SummerCollection";
import { useWishlist } from "../hooks/useWishlist";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Collection = () => {
  const { t } = useTranslation();
  const Collections = [
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
    {
      id: 11,
      img: "https://www.sleepnest.uz/assets/productImg11-4aXKsJZC.jpg",
      title: t("autumn_collection.collections.1"),
      category: t("categories.autumn"),
    },
    {
      id: 12,
      img: "https://www.sleepnest.uz/assets/productImg12-DxA5ccVB.jpg",
      title: t("autumn_collection.collections.2"),
      category: t("categories.autumn"),
    },
    {
      id: 13,
      img: "https://www.sleepnest.uz/assets/productImg12-DxA5ccVB.jpg",
      title: t("autumn_collection.collections.3"),
      category: t("categories.autumn"),
    },
    {
      id: 14,
      img: "https://www.sleepnest.uz/assets/productImg14-DDwESftW.jpg",
      title: t("autumn_collection.collections.4"),
      category: t("categories.autumn"),
    },
    {
      id: 15,
      img: "https://www.sleepnest.uz/assets/productImg15-Bu3C84nj.jpg",
      title: t("autumn_collection.collections.5"),
      category: t("categories.autumn"),
    },
    {
      id: 16,
      img: "https://www.sleepnest.uz/assets/productImg16-CrmeMFF3.jpg",
      title: t("autumn_collection.collections.6"),
      category: t("categories.autumn"),
    },
    {
      id: 17,
      img: "https://www.sleepnest.uz/assets/productImg17-DYqc_VJQ.jpg",
      title: t("autumn_collection.collections.7"),
      category: t("categories.autumn"),
    },
    {
      id: 18,
      img: "https://www.sleepnest.uz/assets/productImg18-DuuQsd8S.jpg",
      title: t("autumn_collection.collections.8"),
      category: t("categories.autumn"),
    },
    {
      id: 19,
      img: "https://www.sleepnest.uz/assets/productImg19-p6tq_Bf2.jpg",
      title: t("autumn_collection.collections.9"),
      category: t("categories.autumn"),
    },
    {
      id: 20,
      img: "https://www.sleepnest.uz/assets/productImg20-CerQyIaR.jpg ",
      title: t("autumn_collection.collections.10"),
      category: t("categories.autumn"),
    },
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

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("categories.all"));

  const categories = [
    t("categories.all"),
    t("categories.winter"),
    t("categories.autumn"),
    t("categories.summer"),
  ];

  const filteredQuery = Collections.filter((item) => {
    const matchQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchCategory =
      selectedCategory === t("categories.all") ||
      item.category === selectedCategory;

    return matchQuery && matchCategory;
  });

  console.log(selectedCategory);

  return (
    <div className="w-full">
      <div className="pt-24 w-full max-w-[1450px] m-auto px-6 flex flex-col md:flex-row md:items-start items-center justify-between">
        <div className="flex flex-col items-start gap-8">
          <div className="w-[320px] h-[60px] bg-[#EDEDED] rounded-full flex items-center px-4">
            <input
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
          <div className="flex flex-col gap-2 items-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor pointer ${
                  selectedCategory === category
                    ? "text-[#A17F4A]"
                    : "text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 place-items-center">
          {filteredQuery.length ? (
            filteredQuery.map((item) => (
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
            ))
          ) : (
            <p>No item</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
