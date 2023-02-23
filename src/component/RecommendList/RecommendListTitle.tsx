import React from "react";
import { NavLink } from "react-router-dom";

function RecommendListTitle() {
  return (
    <div className="text-center text-[2.7rem] md:text-[4rem] lg:text-[5rem]  text-white bg-zinc-600 pt-2">
      BROMPTON BIKES
      <div className="flex">
        <button className="text-[1rem] px-2 bg-transparent border-2 border-white rounded ml-auto mr-[4rem]">
          <NavLink to="/shop">Show All</NavLink>
        </button>
      </div>
    </div>
  );
}

export default RecommendListTitle;
