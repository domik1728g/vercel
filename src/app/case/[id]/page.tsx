import React from "react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { db } from "@/db";
import { notFound } from "next/navigation";
import CaseModal from "@/components/CaseModal";

interface CaseShowPageProps {
  params: {
    id: string;
  };
}

const CaseShowPage = async (props: CaseShowPageProps) => {
  const { id } = props.params;
  const caseData = await db.case.findFirst({
    where: { caseID: id },
  });

  if (!caseData) {
    return notFound();
  }

  return (
    <main className="flex flex-col h-screen overscroll-x-none justify-between">
      <Header />
      <div className="min-h-96 max-w-screen-xl mx-auto flex flex-col md:flex-row">
        <section className="my-5">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
            <div className="w-full mx-auto md:w-1/2 md:pr-4 flex flex-col px-4 md:border md:border-zinc-950 rounded-md p-5">
              <h1 className="text-2xl text-center font-bold mb-5 text-[#1A1A1A]">
                Case Overview: {caseData.fraudCompany}
              </h1>
              <div className="mx-auto">
                <p className="text-base  mb-4 text-[#333333]">
                  <strong>Name:</strong> {caseData.name}
                </p>
                <p className="text-base  mb-4 text-[#333333]">
                  <strong>Email:</strong> {caseData.email}
                </p>
                <p className="text-base  mb-4 text-[#333333]">
                  <strong>Case ID:</strong> {caseData.caseID}
                </p>
              </div>
              <p className="text-base text-center text-[#333333]">
                {caseData.fraudCompany} is under investigation due to reported
                fraudulent activities. The company has allegedly violated
                industry regulations, leading to a class-action lawsuit against
                them.
              </p>
              <p className="text-right mt-3 text-sm">
                Total found is hold: 9,001,227$
              </p>
            </div>
          </div>
          <CaseModal caseData={caseData} />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CaseShowPage;
