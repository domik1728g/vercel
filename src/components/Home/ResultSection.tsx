import React from "react";
import ResultCard from "./ResultCard";

const ResultSection = () => {
  const items = [
    {
      title: "Comprehensive Database",
      desc: "Our platform collects data from a wide range of sources, making it easy to track down information on lawsuits and outcomes related to fraudulent activity. This means that you can find the information you need to settle disputes and recover lost funds all in one place.",
    },
    {
      title: "Data Science Expertise",
      desc: "Our team of data scientists and analysts are constantly refining our algorithms and data collection methods to ensure that our platform is always up-to-date and accurate. This means that you can trust the information you find on Fraud-check.com to be reliable and relevant to your needs.",
    },
    {
      title: "Easy-to-Use Interface",
      desc: "Our user-friendly interface makes it simple to search our database and find the information you need quickly and easily. Whether you're a seasoned legal professional or just starting out, our platform is designed to be accessible to everyone.",
    },
    {
      title: "Money-Back Guarantee",
      desc: "We stand behind the accuracy and reliability of our platform, which is why we offer a money-back guarantee on all of our services. If you're not satisfied with the results you find on Fraud-check.com, we'll refund your money, no questions asked.",
    },
  ];

  return (
    <section className="bg-[#3A3A3A] mt-28 py-20">
      <h1 className="text-3xl text-white font-black text-center mb-10">
        DECADES OF EXPERIENCE. REAL RESULTS
      </h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item, i) => (
          <div className="w-full md:w-1/2 lg:w-1/4 p-4" key={i}>
            <ResultCard title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultSection;
