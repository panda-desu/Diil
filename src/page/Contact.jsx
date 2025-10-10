import React, { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

const Contact = () => {
  const [type, setType] = useState("");

  return (
    <div className="lg:pt-20 lg:ps-20 md:px-20 md:pt-20 pt-8 px-4 lg:block md:flex items-center justify-center">
      <div className="lg:w-[500px] md:w-[584px]">
        <p className="text-[#020618] font-bold text-[24px]">Холбогдох</p>
        <p className="text-[#62748E] text-sm">
          Хамтран ажиллах мөн асууж тодруулах зүйлс байвал бид нээлттэй хүлээж
          авна.
        </p>
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2.5 md:space-y-0">
            <button
              onClick={() => {
                setType("collaboration");
              }}
              className={`px-7 py-2 rounded-[999px] border text-[#020618] w-full md:w-auto transition-all duration-300 ${
                type === "collaboration"
                  ? "border-[#020618]"
                  : "border-[#CAD5E2]"
              }`}
            >
              Хамтран ажиллах
            </button>
            <button
              onClick={() => {
                setType("ad");
              }}
              className={`px-12 py-2 rounded-[999px] border text-[#020618] w-full md:w-auto transition-all duration-300 ${
                type === "ad" ? "border-[#020618]" : "border-[#CAD5E2]"
              }`}
            >
              Зар оруулах
            </button>
            <button
              onClick={() => {
                setType("other");
              }}
              className={`px-4 py-2 rounded-[999px] border text-[#020618] w-full md:w-auto transition-all duration-300 ${
                type === "other" ? "border-[#020618]" : "border-[#CAD5E2]"
              }`}
            >
              Бусад
            </button>
          </div>
          <div className="my-4 space-y-4">
            <input
              className="w-full bg-[#F1F5F9] rounded-[16px] px-4 py-2 text-[#45556C]"
              placeholder="Таны нэр"
              type="text"
            />
            <input
              className="w-full bg-[#F1F5F9] rounded-[16px] px-4 py-2 text-[#45556C]"
              placeholder="Мэйл эсвэл Утас"
              type="text"
            />
            <input
              className="w-full bg-[#F1F5F9] rounded-[16px] px-4 py-2 text-[#45556C]"
              placeholder="Тайлбар"
              type="text"
            />
          </div>

          <button
            className=" flex items-center justify-between md:justify-center gap-2 py-1 ps-6 pe-1 bg-[#020618] hover:bg-[#29EAFF] rounded-[99px]
            transition-all duration-300 group   w-full md:w-auto"
          >
            <p
              className="flex-1 text-center md:flex-none text-[#fff] transition-colors duration-300
            group-hover:text-[#0F172B] md:order-none order-1"
            >
              Илгээх
            </p>

            <div
              className="
      rounded-full w-10 h-10 flex items-center justify-center bg-[#1D293D]
      text-[#fff] text-xl
      group-hover:text-[#29EAFF]
      duration-300 transition-colors
      md:order-none order-2
    "
            >
              <LuArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
