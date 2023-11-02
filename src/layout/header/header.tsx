"use client";
import { useGlobalContext } from "@/context/store";

const Header = () => {
  const { collapse } = useGlobalContext();

  return (
    <div className={`header-top ${collapse ? "header-minimaze" : ""}`}>
      <div>Headers</div>
      <div>Account</div>
    </div>
  );
};

export default Header;
