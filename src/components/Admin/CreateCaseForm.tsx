import React from "react";
import * as actions from "@/actions";
import { redirect } from "next/navigation";

const CreateCaseForm = () => {
  async function createCase(formData: FormData) {
    "use server";
    const parsedData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      fraudCompany: formData.get("fraudCompany") as string,
      comment: formData.get("comment") as string,
    };
    await actions.createCase(parsedData);
    redirect("/backoffice");
  }

  const formFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "fraudCompany", label: "Fraud Company", type: "text" },
    { id: "comment", label: "Comment", type: "text" },
  ];

  return (
    <div>
      <form
        action={createCase}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Report a Case</h2>
        <div className="flex mb-4">
          {formFields.map((field) => (
            <div
              key={field.id}
              className={`form-group ${field.id === "name" ? "" : "ml-4"}`}
            >
              <label
                htmlFor={field.id}
                className="block text-gray-700 font-bold mb-2"
              >
                {field.label}
              </label>
              <input
                required
                type={field.type}
                id={field.id}
                name={field.id}
                className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCaseForm;
