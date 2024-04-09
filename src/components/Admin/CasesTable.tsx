import React from "react";
import * as actions from "@/actions";
import CaseRow from "./CaseRow";

const CasesTable = async () => {
  const cases = await actions.getAllCases();

  const renderCases = cases.map((singleCase: any) => {
    return <CaseRow key={singleCase.id} singleCase={singleCase} />;
  });

  return (
    <div className="mt-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              Name
            </th>
            <th className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              Email
            </th>
            <th className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              Fraud Company
            </th>
            <th className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              Case ID
            </th>
            <th className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              Comment
            </th>
            <th className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>{renderCases}</tbody>
      </table>
    </div>
  );
};

export default CasesTable;
