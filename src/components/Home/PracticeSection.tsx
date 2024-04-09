import React from "react";
import PracticeCard from "./PracticeCard";

const PracticeSection = () => {
  const items = [
    {
      text: "Bank & Financial",
      icon: (
        <svg
          className="h-8 w-8 text-blue-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path
            stroke="none"
            d="M0 0h24v24H0z"
          /> <path d="M9 12l2 2l4 -4" />{" "}
          <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
        </svg>
      ),
    },
    {
      text: "Tax & Business Law",
      icon: (
        <svg
          className="h-8 w-8 text-blue-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="3" y1="21" x2="21" y2="21" />{" "}
          <line x1="3" y1="10" x2="21" y2="10" />{" "}
          <polyline points="5 6 12 3 19 6" />{" "}
          <line x1="4" y1="10" x2="4" y2="21" />{" "}
          <line x1="20" y1="10" x2="20" y2="21" />{" "}
          <line x1="8" y1="14" x2="8" y2="17" />{" "}
          <line x1="12" y1="14" x2="12" y2="17" />{" "}
          <line x1="16" y1="14" x2="16" y2="17" />
        </svg>
      ),
    },
    {
      text: "Property Law",
      icon: (
        <svg
          className="h-8 w-8 text-blue-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      text: "Corporate Law",
      icon: (
        <svg
          className="h-8 w-8 text-blue-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="3" y="7" width="18" height="13" rx="2" />{" "}
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />{" "}
          <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
          <path d="M3 13a20 20 0 0 0 18 0" />
        </svg>
      ),
    },
    {
      text: "Fraud Detection",
      icon: (
        <svg
          className="h-8 w-8 text-blue-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <line x1="12" y1="8" x2="12" y2="12" />{" "}
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center mb-10">
      <div className="flex flex-col mt-20 mx-auto max-w-screen-xl">
        <h1 className="text-[#1A1A1A] font-black text-[1.75rem] text-center mb-5">
          <span className="text-[#2956AB]">PRACTICE</span> AREAS
        </h1>
      </div>
      <div className="flex flex-wrap justify-center max-w-screen-xl">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
          >
            <PracticeCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeSection;
