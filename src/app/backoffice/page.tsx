import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import CreateCaseForm from "@/components/Admin/CreateCaseForm";
import CasesTable from "@/components/Admin/CasesTable";

const Header = dynamic(() => import("@/components/Admin/Header"), {
  ssr: false,
});

const Page = () => {
  const user = cookies().get("user");

  if (!user) {
    redirect("/backoffice/login");
  }

  const logout = async () => {
    "use server";
    cookies().delete("user");
    redirect("/backoffice/login");
  };

  return (
    <div>
      <Header logout={logout} />
      <CreateCaseForm />
      <CasesTable />
    </div>
  );
};

export default Page;
