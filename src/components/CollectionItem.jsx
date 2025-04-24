import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import { useTranslation } from "react-i18next";

const WinterCollectionItem = () => {
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

  const { id } = useParams();

  const item = Collections.find((item) => item.id.toString() === id);
  console.log(item);

  if (!item) {
    return <p className="text-red-500 p-4 mt-32">Item not found!</p>;
  }

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1450px] m-auto flex flex-col gap-28 mt-20">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <img
            className="w-full max-w-[600px] h-auto rounded-[25px]"
            src={item.img}
            alt={item.title}
          />

          <div className="flex flex-col items-start gap-6 w-full max-w-[700px]">
            <h1 className="text-[20px] sm:text-[26px] font-bold">
              {item.title}
            </h1>

            <table className="w-full border border-collapse border-gray-300 text-[18px] font-[300] table-fixed">
              <tbody>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2 font-medium text-left text-[12px] sm:text-[18px]">
                    Material:
                  </td>
                  <td className="px-4 py-2 text-left w-2/3 text-[12px] sm:text-[18px]">
                    100% paxta flanel
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2 font-medium text-left text-[12px] sm:text-[18px]">
                    Yostiq kiyimi:
                  </td>
                  <td className="px-4 py-2 text-left text-[12px] sm:text-[18px]">
                    50x70 sm (2 dona)
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2 font-medium text-left text-[12px] sm:text-[18px]">
                    Choyshab:
                  </td>
                  <td className="px-4 py-2 text-left text-[12px] sm:text-[18px]">
                    260×280 sm (1 dona)
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2 font-medium text-left text-[12px] sm:text-[18px]">
                    Ko‘rpa-to‘shak:
                  </td>
                  <td className="px-4 py-2 text-left text-[12px] sm:text-[18px]">
                    160×220 sm (2 dona)
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2 font-medium text-left text-[12px] sm:text-[18px]">
                    Hajmi:
                  </td>
                  <td className="px-4 py-2 text-left text-[12px] sm:text-[18px]">
                    Maxsus o'lcham
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2 font-medium text-left text-[12px] sm:text-[18px]">
                    Ishlab chiqaruvchi:
                  </td>
                  <td className="px-4 py-2 text-left text-[12px] sm:text-[18px]">
                    Ekologik Toza Uyqu Mahsulotlat
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-red-500 text-[16px] mt-2">
              Kategoriya: {item.category}
            </p>
          </div>
        </div>
        <CommentSection productId={id} />
      </div>
    </div>
  );
};

export default WinterCollectionItem;
