import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";

const WinterCollectionItem = () => {
  const Collections = [
    {
      id: 1,
      img: "https://www.sleepnest.uz/assets/productImg1-DUY0b_Wm.jpg",
      title: "Kvadratchalar",
      category: "Qishgi kolleksiya",
    },
    {
      id: 2,
      img: "https://www.sleepnest.uz/assets/productImg2-DOPfHc9I.jpg",
      title: "Ikat",
      category: "Qishgi kolleksiya",
    },
    {
      id: 3,
      img: "https://www.sleepnest.uz/assets/productImg3-BxeyfoJM.jpg",
      title: "Davralar",
      category: "Qishgi kolleksiya",
    },
    {
      id: 4,
      img: "https://www.sleepnest.uz/assets/productImg4-CcK4oVXm.jpg",
      title: "Geometriya ko'k",
      category: "Qishgi kolleksiya",
    },
    {
      id: 5,
      img: "https://www.sleepnest.uz/assets/productImg5-CpnXLhLk.jpg",
      title: "Tropik barglar",
      category: "Qishgi kolleksiya",
    },
    {
      id: 6,
      img: "https://www.sleepnest.uz/assets/productImg6-nwrmBsNI.jpg",
      title: "Bambi",
      category: "Qishgi kolleksiya",
    },
    {
      id: 7,
      img: "https://www.sleepnest.uz/assets/productImg7-CzuWUAcD.jpg",
      title: "Vizantiya",
      category: "Qishgi kolleksiya",
    },
    {
      id: 8,
      img: "https://www.sleepnest.uz/assets/productImg8-Beqegxf-.jpg",
      title: "Kechki bog'",
      category: "Qishgi kolleksiya",
    },
    {
      id: 9,
      img: "https://www.sleepnest.uz/assets/productImg9-DP-likxW.jpg",
      title: "Pat Markiz",
      category: "Qishgi kolleksiya",
    },
    {
      id: 10,
      img: "https://www.sleepnest.uz/assets/productImg10-CJbpkbvq.jpg",
      title: "Lavanda atirgullari",
      category: "Qishgi kolleksiya",
    },
    {
      id: 11,
      img: "https://www.sleepnest.uz/assets/productImg11-4aXKsJZC.jpg",
      title: "Safari",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 12,
      img: "https://www.sleepnest.uz/assets/productImg12-DxA5ccVB.jpg",
      title: "Ko'p rangli ametist",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 13,
      img: "https://www.sleepnest.uz/assets/productImg12-DxA5ccVB.jpg",
      title: "Shivali bezak",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 14,
      img: "https://www.sleepnest.uz/assets/productImg14-DDwESftW.jpg",
      title: "Zumrad (AB)",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 15,
      img: "https://www.sleepnest.uz/assets/productImg15-Bu3C84nj.jpg",
      title: "Malaxit qutisi",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 16,
      img: "https://www.sleepnest.uz/assets/productImg16-CrmeMFF3.jpg",
      title: "Bahorning hidlari",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 17,
      img: "https://www.sleepnest.uz/assets/productImg17-DYqc_VJQ.jpg",
      title: "Kuzgi barglar tushishi (AB)",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 18,
      img: "https://www.sleepnest.uz/assets/productImg18-DuuQsd8S.jpg",
      title: "Moviy shabada",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 19,
      img: "https://www.sleepnest.uz/assets/productImg19-p6tq_Bf2.jpg",
      title: "Moviy suv",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 20,
      img: "https://www.sleepnest.uz/assets/productImg20-CerQyIaR.jpg ",
      title: "Plaid",
      category: "Kuzgi kolleksiya",
    },
    {
      id: 21,
      img: "https://www.sleepnest.uz/assets/productImg21-C-p6aOaW.jpg",
      title: "Vintage uslubi",
      category: "Yozgi kolleksiya",
    },
    {
      id: 22,
      img: "https://www.sleepnest.uz/assets/productImg22-emL6vfU-.jpg",
      title: "TK",
      category: "Yozgi kolleksiya",
    },
    {
      id: 23,
      img: "https://www.sleepnest.uz/assets/productImg23-CL7pBMvF.jpg",
      title: "Fransuz Riviera",
      category: "Yozgi kolleksiya",
    },
    {
      id: 24,
      img: "https://www.sleepnest.uz/assets/productImg24-B1gnyX0U.jpg",
      title: "Qo'y Dolli",
      category: "Yozgi kolleksiya",
    },
    {
      id: 25,
      img: "https://www.sleepnest.uz/assets/productImg25-BvXKeYJI.jpg",
      title: "Alp tog'lari o'simliklari",
      category: "Yozgi kolleksiya",
    },
    {
      id: 26,
      img: "https://www.sleepnest.uz/assets/productImg26--z9MeTTg.jpg",
      title: "Ilhomlantiruvchi",
      category: "Yozgi kolleksiya",
    },
    {
      id: 27,
      img: "https://www.sleepnest.uz/assets/productImg27-DsTk7fxd.jpg",
      title: "Yashil lotus",
      category: "Yozgi kolleksiya",
    },
    {
      id: 28,
      img: "https://www.sleepnest.uz/assets/productImg28-DaHXHjbW.jpg",
      title: "Tog'li makkajo'xori",
      category: "Yozgi kolleksiya",
    },
    {
      id: 29,
      img: "https://www.sleepnest.uz/assets/productImg29-UBLglkL9.jpg",
      title: "Sakura filiali",
      category: "Yozgi kolleksiya",
    },
    {
      id: 30,
      img: "https://www.sleepnest.uz/assets/productImg30-DXgEC2ST.jpg",
      title: "Zaytun novdasi",
      category: "Yozgi kolleksiya",
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
