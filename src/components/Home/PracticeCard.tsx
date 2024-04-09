import React from "react";

interface PracticeCardProps {
  text: string;
  icon: React.ReactNode;
}

const PracticeCard = ({ text, icon }: PracticeCardProps) => {
  return (
    <div className="group flex flex-col bg-[#EDEDED] rounded-3xl p-5 text-[#333333] transition-all hover:bg-[#2956AB] hover:text-white">
      {icon}
      <p className="text-xl font-bold my-3">{text}</p>
    </div>
  );
};

export default PracticeCard;
