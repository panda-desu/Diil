import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

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
  if (!currentChat) return null;

  return (
    <div className="flex items-center justify-between px-4 py-3 border-y bg-white">
      <div className="flex items-center gap-4 w-[65%]">
        <div className="rounded-full w-[50px] h-[50px] border">
          <img
            src={currentChat.avatar}
            alt="avatar"
            className="w-full h-full rounded-full object-fill"
          />
        </div>
        <div className="w-[90%]">
          <p className="font-bold  text-[#020618] text-lg w-full truncate">
            {currentChat.name}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-[#62748E] truncate max-w-[70%]">
              {currentChat.companyName}
            </p>
            <p className="text-sm text-[#62748E]">{currentChat.time}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg text-[#020618] font-bold">
          {formatSalary(currentChat.salary)}
        </p>
        <LikeButton />
      </div>
    </div>
  );
}
