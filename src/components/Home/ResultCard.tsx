import React from "react";

interface ResultCardProps {
  title: string;
  desc: string;
}

const ResultCard = ({ title, desc }: ResultCardProps) => {
  return (
    <div className="flex flex-col bg-[#2956AB] py-20 px-9 rounded-md text-white hover:bg-white hover:text-[#333333] hover:border-[#2956AB] transition-all">
      <h6 className="text-[1.75rem] text-center mb-5">{title}</h6>
      <p className=" text-lg text-center font-extralight">{desc}</p>
    </div>
  );
};

export default ResultCard;
