"use client";
import { useGlobalContext } from "@/context/store";
import style from "./../../styles/style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaThLarge,
  FaChevronDown,
  FaGrinHearts,
  FaJsSquare,
  FaStream,
} from "react-icons/fa";

const Sidebar = () => {
  const router = usePathname();
  // const [collapse, setCollapse] = useState(false);
  const { userId, collapse, setCollapse } = useGlobalContext();

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
      <ul>
        <li className={router === "/" ? `sidebar-item active` : `sidebar-item`}>
          <Link href="/">
            <span className="icon-sidebar">
              <FaThLarge size={"17"} />
            </span>
            <span className="sidebarlabel">home</span>
            <FaChevronDown className="arrow" size={"12"} />
          </Link>
        </li>

        <li
          className={
            router === "/user" ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href="/user">
            <span className="icon-sidebar">
              <FaGrinHearts size={"17"} />
            </span>
            <span className="sidebarlabel">User</span>
            <FaChevronDown className="arrow" size={"12"} />
          </Link>
        </li>
        <div
          className="sidebar-collapse"
          style={{
            padding: "0px 12px 0px 32px",
            borderRadius: 4,
            marginBottom: 4,
          }}
        >
          <ul style={{ listStyleType: "disc", paddingInlineStart: 0 }}>
            <li style={{ padding: "8px 4px", fontSize: 14 }}>
              <Link href="/user/daftaruser">Daftar User</Link>
            </li>
            <li style={{ padding: "8px 4px", fontSize: 14 }}>
              <Link href="/user/daftaruser">Daftar User</Link>
            </li>
          </ul>
        </div>
        <li
          className={
            router === "/setting" ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href="/setting">
            <span className="icon-sidebar">
              <FaJsSquare size={"17"} />
            </span>
            <span className="sidebarlabel">Setting</span>
          </Link>
        </li>
        <li
          className={
            router === "/setting" ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href="/setting">
            <span className="icon-sidebar">
              <FaJsSquare size={"17"} />
            </span>
            <span className="sidebarlabel">Setting</span>
          </Link>
        </li>
        <li
          className={
            router === "/setting" ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href="/setting">
            <span className="icon-sidebar">
              <FaJsSquare size={"17"} />
            </span>
            <span className="sidebarlabel">Setting</span>
          </Link>
        </li>
        <li
          className={
            router === "/setting" ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href="/setting">
            <span className="icon-sidebar">
              <FaJsSquare size={"17"} />
            </span>
            <span className="sidebarlabel">Setting</span>
          </Link>
        </li>
        <li
          className={
            router === "/setting" ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href="/setting">
            <span className="icon-sidebar">
              <FaJsSquare size={"17"} />
            </span>
            <span className="sidebarlabel">Setting</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
