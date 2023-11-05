"use client";
import { useGlobalContext } from "@/context/store";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import { FaChevronDown, FaStream } from "react-icons/fa";
import SidebarItem from "./sidebaritem";
import { Data } from "./data/data";
// import { ItemSidebar } from "./item";
// import { Fragment } from "react";

const Sidebar = () => {
  // const router = usePathname();
  const { collapse, setCollapse } = useGlobalContext();

  const toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <aside
      className={`sidebar ${collapse ? "minimaze" : ""}`}
      data-collapse={collapse}
    >
      <div
        className={`${collapse ? "sidebar-logo-small" : "sidebar-logo-large"}`}
      >
        {!collapse ? (
          <div className="logo">
            <h4>logo</h4>
          </div>
        ) : null}

        <span onClick={toggle} style={{ cursor: "pointer" }}>
          <FaStream size={"17"} />
        </span>
      </div>

      {Data.map((item, index) => (
        <SidebarItem items={item} key={index} />
      ))}
    </aside>
  );
};

export default Sidebar;
