"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LuClock } from "react-icons/lu";
import { TiFlowSwitch } from "react-icons/ti";
type gameOject = {
  title: string;
  src: string;
  gameName: string;
  category: string;
};
type game = {
  game: gameOject;
};

const benefitsData = [
  {
    id: 1,
    name: "مهارة التخطيط",
    description: "إمكانية تقييم الحلول المتاحة لمشكلة ما ثم اختيار الحل الأمثل",
    icon: <TiFlowSwitch />,
  },
  {
    id: 2,
    name: "التكير المنطقي",
    description:
      "القدرة علي تحليل الأمور منطقية لاستنتاج الأنماط واختاذ االقرارات",
    icon: <TiFlowSwitch />,
  },
  {
    id: 3,
    name: "",
    description: "",
    icon: <TiFlowSwitch />,
  },
];
const allGames = [
  {
    title: "لوحة الكلمات",
    src: "/assets/images/lang-games/lo7at-kalmat.png",
    gameName: "lo7at-kalmat",
    category: "اختبار اللغة",
  },
  {
    title: "تكوين الكلمات",
    src: "/assets/images/lang-games/taqwen-kalmat.png",
    gameName: "taqwen-kalmat",
    category: "اختبار اللغة",
  },
  {
    title: "اختصر الجملة",
    src: "/assets/images/lang-games/e5tsr-elgomla.png",
    gameName: "e5tsr-elgomla",
    category: "اختبار اللغة",
  },
  {
    title: "تعريف الكلمة",
    src: "/assets/images/lang-games/ta3ref.png",
    gameName: "ta3ref",
    category: "اختبار اللغة",
  },
  {
    title: "المترادفات",
    src: "/assets/images/lang-games/G1.png",
    gameName: "almotradifat",
    category: "اختبار اللغة",
  },
  {
    title: "لوحة الرموز",
    src: "/assets/images/problem-solve/U1.png",
    gameName: "law7at-romoz",
    category: "اختبار حل المشاكل",
  },
  {
    title: "اللغز السداسي",
    src: "/assets/images/problem-solve/ug.png",
    gameName: "lo8z-sodasy",
    category: "اختبار حل المشاكل",
  },
  {
    title: "تقسيم اللوحة",
    src: "/assets/images/problem-solve/XP1.png",
    gameName: "taqsem-al-law7a",
    category: "اختبار حل المشاكل",
  },
  {
    title: "لغز المكعبات",
    src: "/assets/images/problem-solve/CQ.png",
    gameName: "lo8z-mok3bat",
    category: "اختبار حل المشاكل",
  },
  {
    title: "تحديد المسار",
    src: "/assets/images/problem-solve/zi.png",
    gameName: "ta7ded-masar",
    category: "اختبار حل المشاكل",
  },
  {
    title: "توصيل النقاط",
    src: "/assets/images/problem-solve/fe.png",
    gameName: "tawsil-nokat",
    category: "اختبار حل المشاكل",
  },
  {
    title: "المربعات المتطابقة",
    src: "/assets/images/tarkez/e4.png",
    gameName: "moraba3at-motatabe8a",
    category: "اختبار التركيز",
  },
  {
    title: "الشكل المختلف",
    src: "/assets/images/tarkez/4S.png",
    gameName: "shakl-mokhtalef",
    category: "اختبار التركيز",
  },
  {
    title: "تدافع الكرات",
    src: "/assets/images/tarkez/X8.png",
    gameName: "tadafe3-korat",
    category: "اختبار التركيز",
  },
  {
    title: "الكلمات الضائعة",
    src: "/assets/images/tarkez/2Q1.png",
    gameName: "kalemat-da2ea",
    category: "اختبار التركيز",
  },
  {
    title: "الشكل المفقود",
    src: "/assets/images/tarkez/k8.png",
    gameName: "shakl-maf8od",
    category: "اختبار التركيز",
  },
  {
    title: "تحدي الارقام",
    src: "/assets/images/math/HD.png",
    gameName: "ta7ady-ar8am",
    category: "اختبار الرياضيات",
  },
  {
    title: "تقدير المجموع",
    src: "/assets/images/math/4-.png",
    gameName: "ta8der-magmo3",
    category: "اختبار الرياضيات",
  },
  {
    title: "جمع الارفام",
    src: "/assets/images/math/iG1.png",
    gameName: "gam3-ar8am",
    category: "اختبار الرياضيات",
  },
  {
    title: "الرقم الاكبر",
    src: "/assets/images/math/fv.png",
    gameName: "ra8m-akbar",
    category: "اختبار الرياضيات",
  },
  {
    title: "حبات المطر",
    src: "/assets/images/math/wo1.png",
    gameName: "7abat-matar",
    category: "اختبار الرياضيات",
  },
  {
    title: "التبديل الزهني",
    src: "/assets/images/flex/6G.png",
    gameName: "tabdeel-zehny",
    category: "اختبار المرونه",
  },
  {
    title: "اتجاه المكعب",
    src: "/assets/images/flex/18.png",
    gameName: "etgah-mok3ab",
    category: "اختبار المرونه",
  },
  {
    title: "كلمة ولون",
    src: "/assets/images/flex/v-.png",
    gameName: "kalema-lawen",
    category: "اختبار المرونه",
  },
  {
    title: "دوران الأشكال",
    src: "/assets/images/flex/Oe.png",
    gameName: "dawaran-ashkal",
    category: "اختبار المرونه",
  },

  {
    title: "التشابة الجزئي",
    src: "/assets/images/flex/Sk.png",
    gameName: "tashabo-joz2e",
    category: "اختبار المرونه",
  },
  {
    title: "لوحة الذاكرة",
    src: "/assets/images/memory/7Q.png",
    gameName: "law7at-zakera",
    category: "اختبار الذاكرة",
  },
  {
    title: "نجوم السماء",
    src: "/assets/images/memory/T_.png",
    gameName: "nogoom-sama2",
    category: "اختبار الذاكرة",
  },
  {
    title: "طريق الخطر",
    src: "/assets/images/memory/IY.png",
    gameName: "taree8-kha6ar",
    category: "اختبار الذاكرة",
  },
  {
    title: "تشابه الأشخاص",
    src: "/assets/images/memory/tC.png",
    gameName: "tashabo-ashkhas",
    category: "اختبار الذاكرة",
  },
  {
    title: "القراءة السريعة",
    src: "/assets/images/fast/qZ.png",
    gameName: "qera2a-saree3a",
    category: "اختبار السرعة",
  },
  {
    title: "ترتيب الأشكال",
    src: "/assets/images/fast/CF.png",
    gameName: "tarteb-ashkal",
    category: "اختبار السرعة",
  },
  {
    title: "المفارنة السريعة",
    src: "/assets/images/fast/m4.png",
    gameName: "mofarna-saree3a",
    category: "اختبار السرعة",
  },
  {
    title: "الخطوات السريعة",
    src: "/assets/images/fast/5e.png",
    gameName: "khotwat-saree3a",
    category: "اختبار السرعة",
  },
  {
    title: "الاقراص الملونه",
    src: "/assets/images/fast/nX.png",
    gameName: "a8ras-molawena",
    category: "اختبار السرعة",
  },
  {
    title: "الأشكال المطابقة",
    src: "/assets/images/fast/3E.png",
    gameName: "ashkal-motatabe8a",
    category: "اختبار السرعة",
  },
  {
    title: "حقيبة السفر",
    src: "/assets/images/fast/h_.png",
    gameName: "7a8eba-safar",
    category: "اختبار السرعة",
  },
];

function GameDetailsComponent({ game }: game) {
  const [imageTop, setImageTop] = useState(1);
  const [visibility, setVisibility] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const checkHeaderPosition = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        console.log(headerTop);
        if (headerTop < 100) {
          setVisibility(1);
        } else {
          setVisibility(0);
        }
        setImageTop(window.scrollY / 2);
      }
    };

    checkHeaderPosition();

    window.onscroll = () => {
      checkHeaderPosition();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="header flex justify-between fixed top-0 z-10 w-full">
          <Image
            className="py-4 px-0 ms-4"
            src={"/assets/icons/info.png"}
            width={35}
            height={35}
            alt="arrow icon"
          ></Image>
          <Link href={"./"}>
            <Image
              className="scale-150 m-4 -rotate-45 "
              src={"/assets/icons/arrow.png"}
              width={35}
              height={35}
              alt="arrow icon"
            ></Image>
          </Link>
        </div>
        <div className="w-full overflow-hidden bg-gradient-to-t via-blue-700/50 from-blue-950 to-transparent">
          <Image
            className="object-fill w-full h-auto relative -z-10"
            src={game.src}
            width={1000}
            height={1000}
            alt={game.gameName}
            style={{ top: `${imageTop}px` }}
            layout="responsive"
          />
        </div>
        <div
          ref={headerRef}
          className={`h-16 bg-blue-900 sticky -top-[1px] -mt-16 transition-all duration-500 ease-out 
                      ${
                        visibility
                          ? "bg-opacity-100 ps-11"
                          : "bg-opacity-0 ps-0"
                      }`}
        >
          <div
            className={`text-white ps-5 ${
              visibility ? "text-sm pt-4" : "text-2xl"
            }`}
          >
            {game.title}
          </div>
          <div className={`text-blue-400 ps-5 text-xs md:text-sm`}>
            {game.category}
          </div>
        </div>
        <div className="bodyD m-5">
          <div className="flex my-3 justify-between">
            <div className="flex gap-2 md:gap-4 ms-3">
              <Image
                className="object-contain md:w-24"
                src={"/assets/icons/cup.png"}
                width={40}
                height={40}
                alt="cup icon"
              ></Image>
              <div>
                <div>افضل نتيجه</div>
                <div>0</div>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 ms-3">
              <Image
                className="object-contain md:w-24"
                src={"/assets/icons/charts.png"}
                width={40}
                height={40}
                alt="charts icon"
              ></Image>
              <div>
                <div>المستوي الحالي</div>
                <div>1/400</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="my-3">
            <h3 className="text-gray-700 font-bold">فوائد اللعبة</h3>
            <div className="penfets flex flex-col gap-3 my-3">
              <div className="penfetOne flex">
                <LuClock className="text-xl text-gray-400 my-auto mx-3"/>
                <div className="flex flex-col">
                  <div className="text-lg"> الثروة اللغوية</div>
                  <div className="text-xs text-gray-600">إمكانية تقييم الحلول المتاحة لمشكلة ما ثم اختيار الحل الأمثل</div>
                </div>
              </div>
              <div className="penfetTwo flex">
                 <LuClock className="text-xl text-gray-400 my-auto mx-3"/>
                <div className="flex flex-col">
                  <div className="text-lg"> الثروة اللغوية</div>
                  <div className="text-xs text-gray-600">إمكانية تقييم الحلول المتاحة لمشكلة ما ثم اختيار الحل الأمثل</div>
                </div>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              aperiam asperiores deleniti? Eius quia quam pariatur. Placeat
              nostrum aut, accusantium non dolorum natus accusamus, quibusdam
              velit est ea incidunt animi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function GameDetails() {
  const { gameName } = useParams();
  const myGamesCategorys = allGames.map((game) => game.gameName);
  const curentGame = allGames.find((game) => game.gameName === gameName);
  if (myGamesCategorys.includes(gameName as string))
    if (curentGame)
      return <GameDetailsComponent game={curentGame}></GameDetailsComponent>;
    else return "no";
}

export default GameDetails;
