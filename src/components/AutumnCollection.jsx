import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import { useTranslation } from "react-i18next";

const AutumnCollection = () => {
  const { t } = useTranslation();

  const autumnCollection = [
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
  ];

  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="w-full">
      <div className="w-full max-w-[1450px] m-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 place-items-center">
          {autumnCollection.map((item) => (
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

export default AutumnCollection;
