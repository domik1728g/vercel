import React from "react";
import RecommendationCarousel from "./RecommendationCarousel";

const RecommendationSection = () => {
  return (
    <section className="flex flex-col items-center mb-10">
      <div className="flex flex-col mt-20 mx-auto max-w-screen-xl">
        <h1 className="text-[#2956AB] font-black text-[1.75rem] text-center mb-10">
          HEAR WHAT OUR CLIENTS HAVE TO SAY
        </h1>
      </div>
      <RecommendationCarousel />
    </section>
  );
};

export default RecommendationSection;
