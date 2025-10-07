import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
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
    <div className="flex w-full h-full py-6 px-4">
      {/* LEFT SIDEBAR */}
      <div className="w-[20vw] space-y-10">
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
      <div className="flex-1 pl-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[24px] font-bold text-[#020618]">Компаниуд</p>
          <div className="flex items-center gap-3">
            <div className="w-[1px] h-[1rem] bg-[#CAD5E2]" />
            <button className="text-[#020618] border border-[#CAD5E2] py-2.5 px-3 rounded-[999px] flex items-center gap-2">
              А → Я
              <img src="/icon/ascendant.svg" alt="icon" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white border border-[#CAD5E2] rounded-[16px] p-4 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mb-4 border">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-sm text-[#020618]">
                    {company.jobs} Ажлын зар
                  </p>
                  <FaChevronRight className="text-[#020618]" />
                </div>
              </div>
              <div>
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
