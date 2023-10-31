"use client";
import style from "./../../styles/style.module.css";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Sidebar = () => {
  const router = usePathname();
  return (
    <nav className={style.sidebar}>
      <ul>
        <li className={router === "/" ? `${style.active}` : `${style.link}`}>
          <Link href="/">
            <h1>icon</h1> <span>home</span>
          </Link>
        </li>
        <li
          className={router === "/user" ? `${style.active}` : `${style.link}`}
        >
          <Link href="/user">User</Link>
        </li>
        <li
          className={
            router === "/setting" ? `${style.active}` : `${style.link}`
          }
        >
          <Link href="/setting">Setting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
