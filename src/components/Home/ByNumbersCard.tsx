import React from "react";

interface ByNumbersCardProps {
  text: string;
  number: number;
  icon: React.ReactNode;
}

const ByNumbersCard = ({ text, number, icon }: ByNumbersCardProps) => {
  return (
    <div className="flex flex-col items-center text-[#333333]">
      {icon}
      <p className="font-black text-2xl my-6 tracking-wider">{number}</p>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default ByNumbersCard;
