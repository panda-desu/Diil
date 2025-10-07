import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
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

const LikeButton = ({ initialLiked }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  return (
    <button
      className="rounded-full flex items-center justify-center bg-[#fff] border-2 border-transparent hover:border-[#E2E8F0] p-1.5"
      onClick={() => setIsLiked((prev) => !prev)}
    >
      {isLiked ? (
        <IoMdHeart size={24} className="text-red-500" />
      ) : (
        <IoMdHeartEmpty size={24} className="text-[#020618]" />
      )}
    </button>
  );
};

export default function ChatHeader({ currentChat }) {
  const navigate = useNavigate();
  if (!currentChat) return null;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 md:px-4 px-1 py-3 border-y border-[#CAD5E2] bg-white ">
        <button
          onClick={() => {
            navigate("/");
          }}
          className={`w-[40px] h-[40px] p-2 rounded-full border-[3px] border-transparent hover:border-[#E2E8F0] lg:hidden flex items-center justify-center transition-all duration-300 `}
        >
          <FiArrowLeft className="text-[28px]" />
        </button>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 ">
            <div className="flex items-center gap-4">
              <div className="rounded-full md:w-[50px] md:h-[50px] w-[40px] h-[40px] border">
                <img
                  src={currentChat.avatar}
                  alt="avatar"
                  className="w-full h-full rounded-full object-fill"
                />
              </div>
              <div className="min-w-[60%]">
                <p className="font-bold  text-[#020618] md:text-lg text-sm truncate md:max-w-[28rem] max-w-[11rem] ">
                  {currentChat.name}
                </p>
                <div className=" items-center gap-4 hidden md:flex">
                  <p className="text-sm text-[#62748E] truncate max-w-[14rem]">
                    {currentChat.companyName}
                  </p>
                  <p className="text-sm text-[#62748E]">{currentChat.time}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <p className="text-lg text-[#020618] hidden md:block font-bold">
                {formatSalary(currentChat.salary)}
              </p>
              <LikeButton />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fff] border-b border-[#CAD5E2] py-3 px-4 flex md:hidden justify-between items-end">
        <div>
          <p className="text-xs text-[#62748E]">{currentChat.time}</p>
          <p className="text-sm text-[#020618] font-bold truncate max-w-[14rem]">
            {currentChat.companyName}
          </p>
        </div>
        <p className="text-sm text-[#020618] font-bold">
          {formatSalary(currentChat.salary)}
        </p>
      </div>
    </div>
  );
}
