"use client";

import { FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "@/context/store";
import Image from "next/image";

const Header = () => {
  const { collapse } = useGlobalContext();

  return (
    <div className={`header-top ${collapse ? "header-minimaze" : ""}`}>
      <div>Headers</div>
      <div className="header-profile">
        <div className="avatar">
          <Image
            src="https://plus.unsplash.com/premium_photo-1698846880685-4b8b54c28ad3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <span className="title-header">Jhon Doe</span>
        <FaChevronDown size={"14"} />
      </div>
    </div>
  );
};

export default Header;
