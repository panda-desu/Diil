import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Games from "./game/Games";
import Leaderboard from "./game/Leaderboard";

const Game = () => {
  const [page, setPage] = useState("allgame");

  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case "allgame":
        return <Games />;
      case "leaderboard":
        return <Leaderboard />;
      default:
        return null;
    }
  };

  const handleChangePage = (table) => {
    setPage(table);
    navigate(`/games/${table}`);
  };

  return (
    <div>
      <div className="pt-12 ps-4 lg:ps-6">
        <p className="text-[#020618] font-bold text-[24px]">Тоглоом</p>
        <p className="text-[#62748E] text-xs">
          Та өөрийн ур чадвараа тоглоом тоглож сорих боломжтой
        </p>
        <div className="py-4 flex items-center gap-2.5">
          <button
            onClick={() => {
              handleChangePage("allgame");
            }}
            className={`text-[#020618] px-4 py-2 rounded-[999px] border ${
              page === "allgame" ? "border-[#020618]" : "border-[#CAD5E2]"
            }`}
          >
            Тоглоомнууд
          </button>
          <button
            onClick={() => {
              handleChangePage("leaderboard");
            }}
            className={`text-[#020618] px-4 py-2 rounded-[999px] border ${
              page === "leaderboard" ? "border-[#020618]" : "border-[#CAD5E2]"
            }`}
          >
            Оноо
          </button>
        </div>
      </div>
      <div className="w-full">{renderPage()}</div>
    </div>
  );
};

export default Game;
