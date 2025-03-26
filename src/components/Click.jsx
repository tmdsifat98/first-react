import React, { useState } from "react";
const Click = () => {
  const [clickEvent, setClickEvent] = useState(false);
  const clickHandle = () => {
    if (clickEvent) {
      setClickEvent(false);
    } else {
      setClickEvent(true);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={clickHandle}
        className=  {`${clickEvent ? "bg-rose-600" : "bg-fuchsia-600"} rounded-xl text-black p-5 m-2 `}
      >
        {clickEvent ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Click;
