import { useState } from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa6";
import cat from "../json/categories.json";
import companiesData from "../json/companies.json";

export default function Companies() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // 🔍 Filtered companies logic
  const filteredCompanies =
    selectedFilter === "all"
      ? companiesData
      : companiesData.filter((company) => company.category === selectedFilter);

  return (
    <div className="flex w-full h-full lg:py-6 py-4 md:px-4 px-0">
      {/* LEFT SIDEBAR */}
      <div className="w-[20vw] space-y-10 hidden lg:block">
        {/* Соёл, Нэмэлт зүйлс */}
        <div>
          <p className="font-bold text-[#020618] mb-4">Соёл, Нэмэлт зүйлс</p>
          <div className="space-y-2">
            <button className="text-sm text-[#020618] px-3 py-2 rounded-[999px] border border-[#CAD5E2]">
              Work/Life balance
            </button>
            <button className="text-sm text-[#020618] px-3 py-2 rounded-[999px] border border-[#CAD5E2]">
              Нэмэлт урамшуулал + Давуу талууд
            </button>
            <button className="text-sm text-[#020618] px-3 py-2 rounded-[999px] border border-[#CAD5E2]">
              Карьерын боломжууд
            </button>
          </div>
        </div>

        {/* Үйл ажиллагааны чиглэл */}
        <div>
          <p className="font-bold text-[#020618] mb-4">
            Үйл ажиллагааны чиглэл
          </p>
          <div className="space-y-2">
            {/* “All” button */}
            <button
              onClick={() => setSelectedFilter("all")}
              className={`text-sm ps-2 min-h-10 w-full flex items-center gap-2 text-start ${
                selectedFilter === "all"
                  ? "text-[#020618] font-bold"
                  : "text-[#45556C]"
              }`}
            >
              {selectedFilter === "all" && <FaChevronRight size={16} />}
              Бүх компаниуд
            </button>

            {/* Category buttons */}
            {cat.categories?.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedFilter(item)}
                className={`text-sm ps-2 min-h-10 w-full flex items-center gap-2 text-start ${
                  selectedFilter === item
                    ? "text-[#020618] font-bold"
                    : "text-[#45556C]"
                }`}
              >
                {selectedFilter === item && <FaChevronRight size={16} />}
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Ажилчдын тоо (optional, not yet filtering) */}
        <div>
          <p className="font-semibold mb-2">Ажилчдын тоо</p>
          <div className="flex flex-wrap gap-2">
            {[
              "1-10",
              "11-50",
              "51-200",
              "201-500",
              "5001-2000",
              "2001 - 5000",
              "5000+",
            ].map((n) => (
              <button
                key={n}
                className="text-sm text-[#020618] border rounded-[999px] border-[#CAD5E2] px-2.5 py-1.5"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT MAIN AREA */}
      <div className="flex-1 lg:pl-6 pl-0">
        {/* title */}
        <div className="flex flex-col md:px-0 px-4">
          <div className="flex items-center justify-between mb-4">
            <p className="lg:text-[24px] text-base font-bold text-[#020618]">
              Компаниуд
            </p>

            {/* desktop filter*/}
            <div className="lg:flex hidden items-center gap-3">
              <div className="w-[1px] h-[1rem] bg-[#CAD5E2]" />
              <button className="text-[#020618] border border-[#CAD5E2] py-2.5 px-3 rounded-[999px] flex items-center gap-2">
                А → Я
                <img src="/icon/ascendant.svg" alt="icon" />
              </button>
            </div>
          </div>

          {/* tablet filter */}
          <div className="mb-4 lg:hidden md:flex hidden items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              <button className="text-[#020618] border border-[#CAD5E2] py-2 pe-3 ps-3.5 rounded-[999px] flex items-center gap-2 text-sm">
                Соёл, Нэмэлт зүйлс
                <div className="w-5 h-5 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                  <FaPlus />
                </div>
              </button>
              <button className="text-[#020618] border border-[#CAD5E2] py-2 pe-3 ps-3.5 rounded-[999px] flex items-center gap-2 text-sm">
                Үйл ажиллагааны чиглэл
                <div className="w-5 h-5 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                  <FaPlus />
                </div>
              </button>
              <button className="text-[#020618] border border-[#CAD5E2] py-2 pe-3 ps-3.5 rounded-[999px] flex items-center gap-2 text-sm">
                Ажлилчдын тоо
                <div className="w-5 h-5 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                  <FaPlus />
                </div>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[1px] h-[1rem] bg-[#CAD5E2]" />
              <button className="text-[#020618] border border-[#CAD5E2] py-1.5 px-3 rounded-[999px] flex items-center gap-2">
                А → Я
              </button>
            </div>
          </div>

          {/* phone filter */}
          <div className="mb-4 md:hidden flex items-center justify-between">
            <button className="text-[#020618] border border-[#CAD5E2] py-2 pe-3 ps-3.5 rounded-[999px] flex items-center gap-2 text-sm">
              Шүүлтүүр нэмэх
              <div className="w-5 h-5 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <FaPlus />
              </div>
            </button>

            <button className="text-[#020618] border border-[#CAD5E2] w-[38px] h-[38px] rounded-full flex items-center justify-center">
              <img src="/icon/ascendant.svg" alt="icon" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3 gap-0">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white md:border border-b border-[#CAD5E2] md:rounded-[16px] p-4 hover:shadow-md transition"
            >
              <div className="flex md:items-start items-center justify-between">
                <div className="md:block flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center md:mb-4 mb-0 border">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="md:hidden block w-[40vw]">
                    <p className="font-bold text-[#020618] truncate">
                      {company.name}
                    </p>
                    <p className="text-sm text-[#62748E] truncate">
                      {company.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-sm text-[#020618]">
                    {company.jobs} Ажлын зар
                  </p>
                  <FaChevronRight className="text-[#020618]" />
                </div>
              </div>
              <div className="md:block hidden">
                <p className="font-bold text-[#020618] w-full truncate">
                  {company.name}
                </p>
                <p className="text-sm text-[#62748E] w-full truncate">
                  {company.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* If no companies found */}
        {filteredCompanies.length === 0 && (
          <p className="text-[#62748E] mt-6">Компани олдсонгүй.</p>
        )}
      </div>
    </div>
  );
}
