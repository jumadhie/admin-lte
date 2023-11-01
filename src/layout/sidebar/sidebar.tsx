"use client";
import style from "./../../styles/style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaThLarge,
  FaChevronDown,
  FaGrinHearts,
  FaJsSquare,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const router = usePathname();
  const [collapse, setCollapse] = useState(false);

  return (
    <aside className={`tes ${style.sidebar}`} data-collapse={collapse}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <h4>logo</h4>
        <span
          onClick={() => {
            setCollapse(!collapse);
          }}
          style={{ cursor: "pointer" }}
        >
          <FaBars size={"17"} />
        </span>
      </div>
      <ul>
        <li className={router === "/" ? `${style.active}` : `${style.link}`}>
          <Link href="/">
            <FaThLarge size={"17"} />
            <span className="sidebarlabel">home</span>
            <FaChevronDown className="arrow" size={"15"} />
          </Link>
        </li>

        <li
          className={router === "/user" ? `${style.active}` : `${style.link}`}
        >
          <Link href="/user">
            <FaGrinHearts size={"17"} />
            <span className="sidebarlabel">User</span>
            <FaChevronDown className="arrow" size={"15"} />
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
            router === "/setting" ? `${style.active}` : `${style.link}`
          }
        >
          <Link href="/setting">
            <FaJsSquare size={"17"} />
            <span className="sidebarlabel">Setting</span>
            {/* <FaChevronDown size={"15"} /> */}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
