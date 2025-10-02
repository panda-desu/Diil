import React from "react";
import { useSidebar } from "../context/SidebarContext";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";

function ExpandingSearch() {
  return (
    <div className="flex items-center ">
      <div className="relative group">
        <div className="flex items-center bg-[#F1F5F9] rounded-full shadow-md transition-all duration-300 w-[20rem] h-[3rem] group-hover:w-[26.25rem] p-1">
          <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#fff] rounded-full cursor-pointer">
            <svg
              className="w-[1.5rem] h-[1.5rem] text-[#020618]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Хайх"
            className="flex-1 bg-transparent outline-none text-[#020618] pr-6 text-center text-[16px]"
          />
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const { sidebar, setSidebar } = useSidebar();

  return (
    <div className="w-full h-[4rem] flex items-center justify-between py-2 ps-2 pe-6">
      <button
        onClick={() => setSidebar(!sidebar)}
        disabled={sidebar}
        className={`w-[40px] h-[40px] p-2 rounded-full border-[3px] border-transparent hover:border-[#E2E8F0] flex items-center justify-center transition-all duration-300 ${
          sidebar && "opacity-0"
        }`}
      >
        <RxDoubleArrowRight className="text-[24px]" />
      </button>
      <ExpandingSearch />
      <button className="group py-1 pe-1 ps-6 gap-3 flex items-center bg-[#020618] rounded-[99px] text-[#fff] hover:bg-[#29EAFF] hover:text-[#0F172B]">
        CV Бүтээх
        <div className="bg-[#1D293D] h-[40px] w-[40px] rounded-full flex items-center justify-center ">
          <FiArrowUpRight className="text-[24px] group-hover:text-[#29EAFF]" />
        </div>
      </button>
    </div>
  );
};

export default Header;
