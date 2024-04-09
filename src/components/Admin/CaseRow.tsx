import React from "react";
import * as actions from "@/actions";
import { redirect } from "next/navigation";

const CaseRow = async ({ singleCase }: any) => {
  async function deleteCaseAction() {
    "use server";
    await actions.deleteCase(singleCase.id);
    redirect("/backoffice");
  }

  return (
    <tr key={singleCase.id}>
      <td className="border px-4 py-2">{singleCase.name}</td>
      <td className="border px-4 py-2">{singleCase.email}</td>
      <td className="border px-4 py-2">{singleCase.fraudCompany}</td>
      <td className="border px-4 py-2">{singleCase.caseID}</td>
      <td className="border px-4 py-2">{singleCase.comment}</td>
      <td className="border px-4 py-2">
        <form action={deleteCaseAction}>
          <button type="submit">
            <svg
              className="h-6 w-6 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="4" y1="7" x2="20" y2="7" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />{" "}
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </form>
      </td>
    </tr>
  );
};

export default CaseRow;
