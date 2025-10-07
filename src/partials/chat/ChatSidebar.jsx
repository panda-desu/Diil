import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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

const ChatSidebar = ({ chats, chatId, setChatId }) => {
  const navigate = useNavigate();

  return (
    <div className=" w-[23vw] bg-[#fff] border-r border-[#CAD5E2] border-t">
      <div className="py-2.5 ps-2.5 pe-4 flex items-center justify-between">
        <button
          onClick={() => {
            navigate("/");
          }}
          className={`w-[40px] h-[40px] p-2 rounded-full border-[3px] border-transparent hover:border-[#E2E8F0] lg:flex hidden items-center justify-center transition-all duration-300 `}
        >
          <FiArrowLeft className="text-[24px]" />
        </button>
        <button className="py-2.5 pe-2.5 gap-1 ps-4 border rounded-[999px] text-[#020618] border-[#CAD5E2] flex items-center justify-center">
          Бүх зар
          <IoIosArrowDown />
        </button>
      </div>
      <div className="w-full h-[91%] overflow-y-scroll">
        {chats.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setChatId(item.id);
            }}
            className={`px-4 py-3.5 flex items-center justify-between hover:bg-[#F8FAFC] border-y ${
              chatId === item.id
                ? "bg-[#F1F5F9] border-[#CAD5E2]"
                : "bg-transparent border-transparent"
            } `}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-full border shrink-0">
                <img
                  className="w-full h-full object-fill rounded-full"
                  src={item.avatar}
                  alt="img"
                />
              </div>
              <div className="">
                <p className="text-[#020618] font-bold truncate w-[120px]">
                  {item.name}
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[#62748E] text-xs truncate w-[60px] ">
                    {item.companyName}
                  </p>
                  <p className="text-[#62748E] text-xs shrink-0">{item.time}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <p className="text-sm font-bold">{formatSalary(item.salary)}</p>
              <FaAngleRight className="text-[#020618]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
