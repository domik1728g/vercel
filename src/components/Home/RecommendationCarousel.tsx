"use client";
import React, { useState, useEffect } from "react";

const RecommendationCarousel = () => {
  const reviews = [
    {
      title: "Charlotte Smith",
      description:
        "Thanks to this service, I was finally able to recover the funds that were rightfully mine after a long and drawn-out legal battle. Their team of experts helped me navigate the process and made sure that every step was taken to maximize my recovery. I couldn't be happier with the results!",
    },
    {
      title: "Alejandro Garcia",
      description:
        "I was so relieved to find this service after losing a significant amount of money due to fraudulent activity. Their team of specialists worked tirelessly to track down the responsible parties and get me the compensation I deserved. I would highly recommend this service to anyone who's been the victim of fraud.",
    },
    {
      title: "Camille Petit",
      description:
        "I can't thank this service enough for their help in recovering the funds that were taken from me in a fraudulent investment scheme. Their expertise and attention to detail made all the difference in the outcome of my case. I would recommend this service to anyone who's looking to recover lost funds.",
    },
    {
      title: "Kowalski Moreau",
      description:
        "After winning my lawsuit, I wasn't sure where to turn to recover the funds that were owed to me. That's when I discovered this service. Their team of experts walked me through the process step-by-step and made sure that I received every penny that I was entitled to. I couldn't have done it without them!",
    },
    {
      title: "Jones Bernard",
      description:
        "I never realized just how vulnerable I was to fraud until I started using Fraud-check.com. Their platform has helped me identify potential risks and take steps to protect myself and my finances. I feel so much more confident and empowered knowing that I have access to such a powerful tool.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextReview = () => {
    const isLastReview = currentIndex === reviews.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToReview = (reviewIndex: number) => {
    setCurrentIndex(reviewIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="max-w-[700px] mx-auto p-4 relative">
      <div className=" p-6  transition-all duration-500">
        <h2 className="text-xl font-semibold mb-2 text-center text-[#2956AB] z-50">
          {reviews[currentIndex].title}
        </h2>
        <p className="text-gray-700 text-center z-50">
          {reviews[currentIndex].description}
        </p>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-2xl p-2 bg-white/80 text-gray-700 cursor-pointer">
        <svg
          onClick={prevReview}
          className="h-10 w-10 text-blue-900"
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
          <polyline points="15 6 9 12 15 18" />
        </svg>{" "}
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl p-2 bg-white/80 text-gray-700 cursor-pointer">
        <svg
          onClick={nextReview}
          className="h-10 w-10 text-blue-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Review Indicators */}
      <div className="flex justify-center mt-8 transition-all duration-500">
        {reviews.map((_, reviewIndex) => (
          <div
            key={reviewIndex}
            onClick={() => goToReview(reviewIndex)}
            className={`${
              reviewIndex === currentIndex ? "w-5 h-3" : "w-3 h-3"
            }  rounded-full mx-2 cursor-pointer ${
              reviewIndex === currentIndex ? "bg-[#2956AB]" : "bg-gray-200 "
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationCarousel;
