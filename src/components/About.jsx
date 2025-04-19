import React from "react";
import { AboutPicture } from "../assets";

const About = () => {
  return (
    <div className="w-full">
      <div className="pt-32 w-full max-w-[1450px] m-auto px-4 flex flex-col xl:flex-row xl:items-start items-center gap-[20px]">
      <img src={AboutPicture} alt="about" className="rounded-[15px] shadow-2xl block xl:hidden" />
        <div className="flex flex-col gap-2 items-start ">
          <h1 className="text-[30px] font-bold">
            Ekologik Toza Uyqu Mahsulotlari
          </h1>
          <p className="text-gray-500 ">
            Matolarimiz va ekologik sumkalar ishlab chiqaruvchi korxonamiz uzoq
            yillardan beri paxta matolarini global bozorda yetkazib berib
            kelmoqda. <br /> <br /> Korxonamiz o‘z faoliyatini 17 yil avval
            boshlagan va shu vaqt ichida mijozlarimiz ishonchini qozonib
            kelmoqda. <br /> <br />
            Kompaniyamizning bosh maqsadi — sifatli, bardoshli va ekologik
            xavfsiz mahsulotlarni yaratishdir. <br /> <br /> Ishlab chiqarish
            jarayonlari butunlay ekologik standartlarga mos bo‘lib,
            atrof-muhitga zarar yetkazmaslikka qaratilgan. <br /> <br />{" "}
            Zamonaviy texnologiyalardan foydalanib, turli xil paxta
            mahsulotlarini yuqori darajada ishlab chiqarish imkoniyatiga egamiz.{" "}
            <br /> <br /> Shuningdek, biz DongJu to‘quv uskunalarining
            O‘zbekistondagi rasmiy vakili sifatida faoliyat yuritamiz. Har yili
            fabrikamizda 80 dan ortiq mahsulot turlari ishlab chiqariladi,
            buning natijasida kompaniya yuqori sifat va barqaror ishlab
            chiqarishni ta’minlaydi. <br /> <br /> Korxonamizda zamonaviy
            texnologiyalar asosida 50 dan ortiq to‘quv dastgohlari faoliyat
            ko‘rsatmoqda. <br /> <br />
            Bizning ishlab chiqarish jarayonlarimizda faqat sifatli va ekologik
            xavfsiz mahsulotlar ishlab chiqarishni ta’minlaymiz. <br /> <br />{" "}
            Mijozlarimiz talablariga javoban, ekologik xavfsiz va zamonaviy
            dizaynli sumkalar ishlab chiqarish yo‘lga qo‘yilgan. <br /> <br />{" "}
            Kompaniyamiz har doim mijozlariga sifatli mahsulot va yuqori
            darajadagi xizmat ko‘rsatishdan mamnun.
          </p>
        </div>
        <img src={AboutPicture} alt="about" className="rounded-[15px] hidden xl:block shadow-2xl" />
      </div>
    </div>
  );
};

export default About;
