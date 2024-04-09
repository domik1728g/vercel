import React from "react";
import { db } from "@/db";
import { redirect } from "../../../node_modules/next/navigation";

const FormSection = () => {
  async function handleCaseSearch(formData: FormData) {
    "use server";
    const id = (formData.get("search") as string) || "";
    const caseData = await db.case.findFirst({
      where: { caseID: id },
    });
    if (!caseData) return;
    redirect(`/case/${caseData.caseID}`);
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-3">
        <h3 className="mb-4 text-[#333333] text-3xl">Search your case</h3>
        <form
          action={handleCaseSearch}
          className="flex flex-col p-5 border border-slate-200 rounded-md items-start"
        >
          <input
            type="text"
            placeholder="Name, Email, Case ID"
            name="search"
            className="w-full border rounded-md p-4 mb-5"
            required
          />
          <button className="text-lg w-48 bg-blue-800 text-white px-4 py-2 rounded-md border-2 border-blue-800 hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800 transition-all">
            Search &gt;
          </button>{" "}
        </form>
      </div>
    </section>
  );
};

export default FormSection;
