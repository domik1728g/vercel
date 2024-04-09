import React from "react";
import ByNumbersCard from "./ByNumbersCard";

const ByNumbersSection = () => {
  const items = [
    {
      number: 776,
      text: "Qualified Lawyers",
      icon: (
        <svg
          className="h-12 w-12 text-blue-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
          <circle cx="8.5" cy="7" r="4" />{" "}
          <polyline points="17 11 19 13 23 9" />
        </svg>
      ),
    },
    {
      number: 1131223,
      text: "Trusted Clients",
      icon: (
        <svg
          className="h-12 w-12 text-blue-900"
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
          <circle cx="12" cy="12" r="9" />{" "}
          <line x1="9" y1="10" x2="9.01" y2="10" />{" "}
          <line x1="15" y1="10" x2="15.01" y2="10" />{" "}
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      ),
    },
    {
      number: 1226337,
      text: "Successful Cases",
      icon: (
        <svg
          className="h-12 w-12 text-blue-900"
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
          <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
        </svg>
      ),
    },
    {
      number: 275,
      text: "Honors & Awards",
      icon: (
        <svg
          className="h-12 w-12 text-blue-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="12" cy="8" r="7" />{" "}
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col mt-20 max-w-screen-xl w-full">
        <h1 className="text-[#2956AB] font-black text-[1.75rem] text-center mb-10">
          US BY NUMBERS
        </h1>
        <div className="flex flex-wrap justify-center ">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
            >
              <ByNumbersCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByNumbersSection;
