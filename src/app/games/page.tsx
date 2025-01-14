import React from "react";
import GroubHeader from "../components/games-page/GroupHeader";
import GameCard from "../components/games-page/GameCard";

const gameCategories = [
  {
    categoryName: "اللغة",
    games: [
      {
        title: "لوحة الكلمات",
        src: "/assets/images/lang-games/lo7at-kalmat.png",
        link: "/games/lo7at-kalmat",
      },
      {
        title: "تكوين الكلمات",
        src: "/assets/images/lang-games/taqwen-kalmat.png",
        link: "/games/taqwen-kalmat",
      },
      {
        title: "اختصر الجملة",
        src: "/assets/images/lang-games/e5tsr-elgomla.png",
        link: "/games/e5tsr-elgomla",
      },
      {
        title: "تعريف الكلمة",
        src: "/assets/images/lang-games/ta3ref.png",
        link: "/games/ta3ref",
      },
      {
        title: "المترادفات",
        src: "/assets/images/lang-games/G1.png",
        link: "/games/almotradifat",
      },
    ],
  },
  {
      categoryName: "حل المشاكل",
      games: [
        {
          title: "لوحة الرموز",
          src: "/assets/images/problem-solve/U1.png",
          link: "/games/law7at-romoz",
        },
        {
          title: "اللغز السداسي",
          src: "/assets/images/problem-solve/ug.png",
          link: "/games/lo8z-sodasy",
        },
        {
          title: "تقسيم اللوحة",
          src: "/assets/images/problem-solve/XP1.png",
          link: "/games/taqsem-al-law7a",
        },
        {
          title: "لغز المكعبات",
          src: "/assets/images/problem-solve/CQ.png",
          link: "/games/lo8z-mok3bat",
        },
        {
          title: "تحديد المسار",
          src: "/assets/images/problem-solve/zi.png",
          link: "/games/ta7ded-masar",
        },
        {
          title: "توصيل النقاط",
          src: "/assets/images/problem-solve/fe.png",
          link: "/games/tawsil-nokat",
        },
      ],
    },
    {
      categoryName: "التركيز",
      games: [
        {
          title: "المربعات المتطابقة",
          src: "/assets/images/tarkez/e4.png",
          link: "/games/moraba3at-motatabe8a",
        },
        {
          title: "الشكل المختلف",
          src: "/assets/images/tarkez/4S.png",
          link: "/games/shakl-mokhtalef",
        },
        {
          title: "تدافع الكرات",
          src: "/assets/images/tarkez/X8.png",
          link: "/games/tadafe3-korat",
        },
        {
          title: "الكلمات الضائعة",
          src: "/assets/images/tarkez/2Q1.png",
          link: "/games/kalemat-da2ea",
        },
        {
          title: "الشكل المفقود",
          src: "/assets/images/tarkez/k8.png",
          link: "/games/shakl-maf8od",
        },
      ],
    },
    {
      categoryName: "الرياضيات",
      games: [
        {
          title: "تحدي الارقام",
          src: "/assets/images/math/HD.png",
          link: "/games/ta7ady-ar8am",
        },
        {
          title: "تقدير المجموع",
          src: "/assets/images/math/4-.png",
          link: "/games/ta8der-magmo3",
        },
        {
          title: "جمع الارفام",
          src: "/assets/images/math/iG1.png",
          link: "/games/gam3-ar8am",
        },
        {
          title: "الرقم الاكبر",
          src: "/assets/images/math/fv.png",
          link: "/games/ra8m-akbar",
        },
        {
          title: "حبات المطر",
          src: "/assets/images/math/wo1.png",
          link: "/games/7abat-matar",
        },
      ],
    },
    {
      categoryName: "المرونه",
      games: [
        {
          title: "التبديل الزهني",
          src: "/assets/images/flex/6G.png",
          link: "/games/tabdeel-zehny",
        },
        {
          title: "اتجاه المكعب",
          src: "/assets/images/flex/18.png",
          link: "/games/etgah-mok3ab",
        },
        {
          title: "كلمة ولون",
          src: "/assets/images/flex/v-.png",
          link: "/games/kalema-lawen",
        },
        {
          title: "دوران الأشكال",
          src: "/assets/images/flex/Oe.png",
          link: "/games/dawaran-ashkal",
        },
        
        {
          title: "التشابة الجزئي",
          src: "/assets/images/flex/Sk.png",
          link: "/games/tashabo-joz2e",
        },
      ],
    },
  
    {
      categoryName: "الذاكرة",
      games: [
        {
          title: "لوحة الذاكرة",
          src: "/assets/images/memory/7Q.png",
          link: "/games/law7at-zakera",
        },
        {
          title: "نجوم السماء",
          src: "/assets/images/memory/T_.png",
          link: "/games/nogoom-sama2",
        },
        {
          title: "طريق الخطر",
          src: "/assets/images/memory/IY.png",
          link: "/games/taree8-kha6ar",
        },
        {
          title: "تشابه الأشخاص",
          src: "/assets/images/memory/tC.png",
          link: "/games/tashabo-ashkhas",
        },
       
      ],
    },
    {
      categoryName: "السرعة",
      games: [
        {
          title: "القراءة السريعة",
          src: "/assets/images/fast/qZ.png",
          link: "/games/qera2a-saree3a",
        },
        {
          title: "ترتيب الأشكال",
          src: "/assets/images/fast/CF.png",
          link: "/games/tarteb-ashkal",
        },
        {
          title: "المفارنة السريعة",
          src: "/assets/images/fast/m4.png",
          link: "/games/mofarna-saree3a",
        },
        {
          title: "الخطوات السريعة",
          src: "/assets/images/fast/5e.png",
          link: "/games/khotwat-saree3a",
        },
        {
          title: "الاقراص الملونه",
          src: "/assets/images/fast/nX.png",
          link: "/games/a8ras-molawena",
        },
        {
          title: "الأشكال المطابقة",
          src: "/assets/images/fast/3E.png",
          link: "/games/ashkal-motatabe8a",
        },
        {
          title: "حقيبة السفر",
          src: "/assets/images/fast/h_.png",
          link: "/games/7a8eba-safar",
        },
      ],
    },
];

export default function Games() {
  return (
    <>
      <div className="px-5 py-3 sticky top-0 z-20 bg-white text-2xl font-bold">
        الألعاب
      </div>
      {gameCategories.map((category, index) => (
        <div key={index}>
          <GroubHeader gameName={category.categoryName} />
          <div className="grid grid-cols-2 justify-center  p-2">
            {category.games.map((game, gameIndex) => (
              <GameCard key={gameIndex} title={game.title} src={game.src} link={game.link} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
