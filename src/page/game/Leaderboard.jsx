import React from "react";
import data from "../../json/leaderboard.json";
import { FaPlus } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";

const Leaderboard = () => {
  return (
    <div className="md:flex block lg:px-6 px-4 pt-4 mx-auto md:gap-3 gap-0 pb-10">
      <div className="rounded-2xl border border-[#CAD5E2] w-full md:w-[48%] lg:w-[60%] ">
        {data.map((user, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-3 py-4 ${
              index === 0
                ? "bg-gradient-to-r from-[#FF6829]/20 to-[#E8FF3E]/20 rounded-t-2xl"
                : index === 1
                ? "bg-gradient-to-r from-[#29FFE2]/20 to-[#4342FF]/20"
                : index === 2
                ? "bg-gradient-to-r from-[#E8FF3E]/20 to-[#29FFE2]/20"
                : index === data.length - 1
                ? "bg-[#fff] rounded-b-2xl"
                : "bg-[#fff]"
            }`}
          >
            <div className="flex items-center gap-4 flex-1">
              <span className="text-[#62748E] text-xs">{user.position}</span>
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <img
                  className="rounded-full h-full w-full object-contain"
                  src={user.image}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#020618] font-bold text-sm truncate w-[150px]">
                  {user.name}
                </p>
                <p className="text-[#62748E] text-xs truncate w-[150px]">
                  {user.work}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[#020618] font-bold text-xs">
                {user.score}
              </span>
              <span className="text-[#62748E] text-xs ml-1">Оноо</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-[#CAD5E2] w-full md:w-[48%] lg:w-[40%]  p-6 mt-3 md:mt-0">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img
              className="w-full h-full rounded-full object-contain"
              src="https://randomuser.me/api/portraits/women/15.jpg"
              alt="selfie"
            />
          </div>
          <div>
            <p className="text-[#020618] font-bold">Saren Goldtooth</p>
            <p className="text-xs text-[#62748E]">UXUI Designer</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-full rounded-2xl bg-[#F1F5F9] flex items-center gap-3 p-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#4258FF] text-[#fff] rounded-full">
              <img src="/icon/leaderboard/white.svg" alt="icon" />
            </div>
            <div>
              <p className="text-[#020618] font-bold">#201</p>
              <p className="text-[#62748E] text-xs">Таны ранк</p>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-[#F1F5F9] flex items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#FFE83E] text-[#fff] rounded-full">
                <img src="/icon/leaderboard/black.svg" alt="icon" />
              </div>
              <div>
                <p className="text-[#020618] font-bold">#201</p>
                <p className="text-[#62748E] text-xs">Таны ранк</p>
              </div>
            </div>
            <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#fff] border-2 border-transparent hover:border-[#E2E8F0">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-5">
            <p className="text-[#020618] font-bold">Оноогоо хувиргах</p>
            <p className="text-[#62748E] text-xs">
              Хувиргах хувилбараа сонгоно уу
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="border border-[#CAD5E2] rounded-xl p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full items-center justify-center border flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-contain"
                  src="/img/logo/cu.svg"
                  alt="cu"
                />
              </div>
              <p className="text-[#020618] text-sm font-bold ">
                CU оноо болгох
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="px-1.5 py-1 rounded-[999px] bg-gradient-to-r from-[#4342FF]/20 to-[#FF6829]/20">
                <p className="text-[#020618] text-[11px]">CU 2000</p>
              </div>
              <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#fff] border-2 border-transparent hover:border-[#E2E8F0">
                <LuArrowRight className="text-lg" />
              </button>
            </div>
          </div>
          <div className="border border-[#CAD5E2] rounded-xl p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full items-center justify-center border flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-contain"
                  src="/img/logo/eats.svg"
                  alt="cu"
                />
              </div>
              <p className="text-[#020618] text-sm font-bold ">
                UB Eats оноо болгох
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="px-1.5 py-1 rounded-[999px] bg-gradient-to-r from-[#FF6829]/20 to-[#E8FF3E]/20">
                <p className="text-[#020618] text-[11px]">UBEats 2000</p>
              </div>
              <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#fff] border-2 border-transparent hover:border-[#E2E8F0">
                <LuArrowRight className="text-lg" />
              </button>
            </div>
          </div>
          <div className="border border-[#CAD5E2] rounded-xl p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full items-center justify-center border flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-contain"
                  src="/img/logo/gs25.svg"
                  alt="cu"
                />
              </div>
              <p className="text-[#020618] text-sm font-bold ">
                GS25 оноо болгох
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="px-1.5 py-1 rounded-[999px] bg-gradient-to-r from-[#29FFE2]/20 to-[#4342FF]/20">
                <p className="text-[#020618] text-[11px]">GS25 2000</p>
              </div>
              <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#fff] border-2 border-transparent hover:border-[#E2E8F0">
                <LuArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
