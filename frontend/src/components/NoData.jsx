import React from "react";
import animation from "../assets/Animation.gif";
function NoData() {
  return (
    <div className="flex flex-col justify-center gap-6 h-full min-h-[80vh] items-center">
      <div>
        <img src={animation} alt="no"></img>
      </div>
      <div>
        <div className="text-center my-2 font-bold text-lg">Not Data Found</div>
        <div className="text-center my-2">We couldn't find any item based.</div>
      </div>
    </div>
  );
}

export default NoData;
