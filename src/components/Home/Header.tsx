import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import logoImg from "../../../public/logo-removebg-preview.png";

const Header = () => {
  return (
    <div className="text-[#2F3C53] py-4">
      <div className="container mx-auto max-w-screen-xl md:pr-4 px-4 flex justify-center items-center md:justify-start">
        <div className="flex flex-col items-center justify-between">
          <Image
            src={logoImg}
            alt="Logo"
            className="sm:block w-[4.5rem] h-[4.5rem]"
          />
          <Link href="/" className="text-xs font-bold">
            FRAUD CHECK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
