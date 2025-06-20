import React from "react";

const TimeLine = ({ title, children }) => {
  return (
    <div className="max-w-[100vw] ml-12 p-2 flex  justify-start  items-start gap-2 overflow-x-hidden">
      <div className="w-[5%] flex flex-col items-center justify-start gap-2">
        <div className="rounded-full bg-zinc-900 p-4"></div>
        <div className="bg-zinc-900 p-[0.5px] h-36"></div>
      </div>
      <div className="w-1/5 p-2 text-zinc-600 text-4xl text-left  font-bold">{title}</div>
			<div className="w-3/5 text-left p-2">{children}</div>
    </div>
  );
};

export default TimeLine;
