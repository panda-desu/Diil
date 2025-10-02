import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdHeart,
  IoMdHeartEmpty,
} from "react-icons/io";
import works from "../json/workplaces.json";

const EyeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LikeButton = ({ initialLiked }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  return (
    <button
      className="rounded-full h-[2rem] w-[2rem] flex items-center justify-center bg-[#fff]"
      onClick={() => setIsLiked((prev) => !prev)}
    >
      {isLiked ? (
        <IoMdHeart size={16} className="text-red-500" />
      ) : (
        <IoMdHeartEmpty size={16} className="text-[#020618]" />
      )}
    </button>
  );
};

const Home = () => {
  const [filter, setFilter] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = () => {
    setFilter("date");
    setIsAscending((prev) => !prev);
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;

    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffYear > 0) {
      return `${diffYear} жилийн өмнө`;
    } else if (diffMonth > 0) {
      return `${diffMonth} сарын өмнө`;
    } else if (diffWeek > 0) {
      return `${diffWeek} долоо хоногийн өмнө`;
    } else if (diffDay > 0) {
      return `${diffDay} өдрийн өмнө`;
    } else if (diffHour > 0) {
      return `${diffHour} цагийн өмнө`;
    } else if (diffMin > 0) {
      return `${diffMin} минутын өмнө`;
    } else {
      return "Дөнгөж сая";
    }
  };

  function formatSalary(salary) {
    if (salary >= 1_000_000) {
      const val = (salary / 1_000_000).toFixed(1);
      return val.endsWith(".0") ? `${parseInt(val)} сая ₮` : `${val} сая ₮`;
    } else if (salary >= 1000) {
      const val = (salary / 1000).toFixed(0);
      return `${val} мянга ₮`;
    }

    return `${salary} ₮`;
  }

  return (
    <div className="p-6 flex items-center gap-5 h-[calc(100vh-4rem)]">
      <div className="w-[72%] flex flex-col h-full">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setFilter("time");
                }}
                className={`text-[#020618] px-4 py-2 rounded-[999px] bg-[#fff] transition-all duration-300 ${
                  filter === "time"
                    ? "border-2 border-[#020618]"
                    : "border border-[#CAD5E2]"
                } hover:bg-[#E2E8F0]`}
              >
                Хугацаагаар
              </button>
              <button
                onClick={() => {
                  setFilter("salary");
                }}
                className={`text-[#020618] px-4 py-2 rounded-[999px] bg-[#fff] transition-all duration-300 ${
                  filter === "salary"
                    ? "border-2 border-[#020618]"
                    : "border border-[#CAD5E2]"
                } hover:bg-[#E2E8F0]`}
              >
                Цалингаар
              </button>
            </div>
            <div className="h-4 w-[1px] bg-[#CAD5E2]" />
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setFilter("activity");
                }}
                className={`text-[#020618] px-4 py-2 rounded-[999px] bg-[#fff] flex items-center gap-1.5 transition-all duration-300 ${
                  filter === "activity"
                    ? "border-2 border-[#020618]"
                    : "border border-[#CAD5E2]"
                } hover:bg-[#E2E8F0]`}
              >
                Үйл ажиллагаа <IoIosArrowDown className="text-[16px] mt-1" />
              </button>
              <button
                onClick={() => {
                  setFilter("culture");
                }}
                className={`text-[#020618] px-4 py-2 rounded-[999px] bg-[#fff] flex items-center gap-1.5 transition-all duration-300 ${
                  filter === "culture"
                    ? "border-2 border-[#020618]"
                    : "border border-[#CAD5E2]"
                } hover:bg-[#E2E8F0]`}
              >
                Соёл <IoIosArrowDown className="text-[16px] mt-1" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-4 w-[1px] bg-[#CAD5E2]" />
            <button
              onClick={handleClick}
              className={`text-[#020618] px-4 py-2 rounded-[999px] bg-[#fff] flex items-center gap-1.5 transition-all duration-300 ${
                filter === "date"
                  ? "border-2 border-[#020618]"
                  : "border border-[#CAD5E2]"
              } hover:bg-[#E2E8F0]`}
            >
              {isAscending ? "Шинэ → Хуучин" : "Шинэ ← Хуучин"}
              <img src="/img/icon/ascendant.svg" alt="icon" />
            </button>
          </div>
        </div>
        <div className="flex-1 border border-[#CAD5E2] rounded-[24px] overflow-y-auto">
          {works.map((items, index) => {
            return (
              <div
                key={index}
                className="w-full py-4 ps-4 pe-2 gap-6 flex justify-between items-center cursor-pointer hover:bg-[#F1F5F9] group"
              >
                <div className="flex items-center gap-[13px]">
                  <img
                    className="border rounded-full w-8 h-8"
                    src={items.logo}
                    alt="logo"
                  />
                  <div className="w-[14.5rem]">
                    <p className="font-bold text-[#020618] truncate">
                      {items.name}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-[#62748E] text-xs truncate">
                        {items.companyName}
                      </p>
                      <p className="text-[#62748E] text-xs">
                        {getTimeAgo(items.createdDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[#62748E] text-xs w-[10.25rem] truncate">
                  {items.location}
                </p>
                <p className="text-sm font-bold text-[#020618]">
                  {formatSalary(items.salary)}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  {/* Like button */}
                  <LikeButton initialLiked={items.isLiked} />

                  {/* Ярилцлага button */}
                  <button
                    className="group relative rounded-[99px] pe-1 ps-2.5 py-1 flex items-center gap-2 
                           bg-transparent text-[#020618] 
                           hover:bg-[#29EAFF] hover:text-[#0F172B]
                           group-hover:bg-[#020618] group-hover:text-white
                           transition-colors duration-300"
                  >
                    Ярилцлага
                    <div
                      className="w-[2rem] h-[2rem] rounded-full flex items-center justify-center 
                          bg-transparent text-[#020618] 
                          group-hover:bg-[#1D293D] group-hover:text-white 
                          transition-colors duration-300"
                    >
                      <IoIosArrowForward className="text-sm" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[28%] flex flex-col h-full">
        <div className="space-y-4 mt-[3.2rem]">
          {/* Top Two Cards */}
          <div className="flex items-center justify-between gap-2.5">
            {/* Card 1 */}
            <div className="bg-[#F1F5F9] rounded-[24px] p-4 gap-6 w-[50%] h-[9.2rem]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center ">
                  <EyeIcon className="text-[24px]" />
                </div>
                <IoIosArrowForward className="text-[18px]" />
              </div>
              <h2 className="font-bold text-[#020618] mb-2">0 Үзэлт</h2>
              <p className="text-[#62748E] text-xs">
                Таныг сонирхосон компаниуд
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F1F5F9] rounded-[24px] p-4 gap-6 w-[50%] h-[9.2rem]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center ">
                  <EyeIcon className="text-[24px]" />
                </div>
                <IoIosArrowForward className="text-[18px]" />
              </div>
              <h2 className="font-bold text-[#020618] mb-2">0 Ярилцсан</h2>
              <p className="text-[#62748E] text-[11px]">
                Work DNA тэй ярилцсан компаниуд
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl p-[3px] bg-[linear-gradient(40deg,#4342FF,#FF6829)] bg-opacity-10">
            <div className="relative rounded-[22px] bg-white p-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4342FF] to-[#FF6829] opacity-10"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#4258FF] flex items-center justify-center rounded-full">
                    <img src="/img/icon/star.svg" alt="star" />
                  </div>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#E2E8F0]">
                    <IoIosArrowForward />
                  </div>
                </div>
                <h2 className="font-bold text-[#020618] mb-4">
                  Work DNA Тодорхойлох
                </h2>
                <p className="text-[#020618] text-xs mb-8">
                  Таны ажилтны ялгарлыг тодорхойлж өмнөөс тань ажлын ярилцлаганд
                  ордог Work DNA
                </p>
                <button className="text-sm group py-1 pe-1 ps-6 gap-3 flex items-center bg-[#020618] rounded-[99px] text-[#fff] hover:bg-[#29EAFF] hover:text-[#0F172B] transition-all duration-300">
                  CV Бүтээх
                  <div className="bg-[#1D293D] h-[32px] w-[32px] rounded-full flex items-center justify-center ">
                    <IoIosArrowForward className="text-[16px] group-hover:text-[#29EAFF]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <h3 className="mt-8 font-bold text-[#020618] ">Онцгой зар</h3>
          <div className="h-[20%] overflow-y-scroll flex flex-col items-center gap-4">
            <div className=" w-full relative rounded-2xl p-[2px] bg-[linear-gradient(50deg,#FF4D29,#FFE83E)]">
              <div className="relative rounded-2xl bg-white p-2.5">
                <div className="absolute inset-0 bg-[linear-gradient(50deg,#FF6829,#FFE83E)] opacity-10 rounded-2xl pointer-events-none"></div>

                <div className="relative w-full flex items-center justify-between">
                  <img src="/img/logo/xac.svg" alt="logo" />
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#E2E8F0]">
                    <IoIosArrowForward />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold text-[#020618]">
                    Front-end developer
                  </p>
                  <p className="font-bold text-[#020618]">2.5 Сая ₮</p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[#020618] text-sm">Toki</p>
                  <p className="text-[#020618] text-sm">2 өдрийн өмнө</p>
                </div>
              </div>
            </div>
            <div className=" w-full relative rounded-2xl p-[2px] bg-[linear-gradient(50deg,#29EAFF,#4258FF)]">
              <div className="relative rounded-2xl bg-white p-2.5">
                <div className="absolute inset-0 bg-[linear-gradient(50deg,#29FFE2,#4258FF)] opacity-10 rounded-2xl pointer-events-none"></div>

                <div className="relative w-full flex items-center justify-between">
                  <img src="/img/logo/upoint.svg" alt="logo" />
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#E2E8F0]">
                    <IoIosArrowForward />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold text-[#020618]">
                    Front-end developer
                  </p>
                  <p className="font-bold text-[#020618]">2.5 Сая ₮</p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[#020618] text-sm">Toki</p>
                  <p className="text-[#020618] text-sm">2 өдрийн өмнө</p>
                </div>
              </div>
            </div>
            <div className=" w-full relative rounded-2xl p-[2px] bg-[linear-gradient(50deg,#FFE83E,#29EAFF)]">
              <div className="relative rounded-2xl bg-white p-2.5">
                <div className="absolute inset-0 bg-[linear-gradient(50deg,#E8FF3E,#29FFE2)] opacity-10 rounded-2xl pointer-events-none"></div>

                <div className="relative w-full flex items-center justify-between">
                  <img src="/img/logo/tdb.svg" alt="logo" />
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-[#E2E8F0]">
                    <IoIosArrowForward />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="font-bold text-[#020618]">
                    Front-end developer
                  </p>
                  <p className="font-bold text-[#020618]">2.5 Сая ₮</p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[#020618] text-sm">Toki</p>
                  <p className="text-[#020618] text-sm">2 өдрийн өмнө</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
