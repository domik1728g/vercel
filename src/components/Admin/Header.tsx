import React from "react";

interface HeaderProps {
  logout: () => void;
}

const Header = ({ logout }: HeaderProps) => {
  return (
    <header className="w-full h-12 flex items-center justify-end py-2 px-2">
      <form action={logout}>
        <button
          className="w-32 rounded-md bg-blue-500 hover:bg-blue-700py-1 text-white"
          type="submit"
        >
          Logout
        </button>
      </form>
    </header>
  );
};

export default Header;
