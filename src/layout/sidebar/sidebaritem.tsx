"use client";
import { useGlobalContext } from "@/context/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SidebarItem = ({ items }: any) => {
  const llll = useRef(null);
  const router = usePathname();
  const activeparent = [];

  for (const key in items.subMenu) {
    activeparent.push(items.subMenu[key].path);
  }

  const { collapse } = useGlobalContext();
  const [toggleCollapse, setToggleCollapse] = useState(false);

  if (items.subMenu) {
    return (
      <ul>
        <li
          className={
            activeparent.includes(router)
              ? `sidebar-item active`
              : `sidebar-item`
          }
        >
          <Link href={`#`} onClick={() => setToggleCollapse(!toggleCollapse)}>
            <span className="icon-sidebar">{items.icon}</span>
            <span className="sidebarlabel">{items.name}</span>
            {toggleCollapse ? (
              <FaChevronUp className="arrow" size={"12"} />
            ) : (
              <FaChevronDown className="arrow" size={"12"} />
            )}
          </Link>
        </li>
        {!collapse && (
          <div className="sidebar-collapse">
            {toggleCollapse && (
              <ul ref={llll}>
                {items.subMenu.map((sub: any, i: any) => (
                  <li
                    className={
                      router === `${sub.path}`
                        ? `sidebar-collapse active-collapse`
                        : `sidebar-collapse`
                    }
                    key={i}
                  >
                    <Link href={`${sub.path}`}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </ul>
    );
  } else {
    return (
      <ul>
        <li
          className={
            router === `${items.path}` ? `sidebar-item active` : `sidebar-item`
          }
        >
          <Link href={`${items.path}`}>
            <span className="icon-sidebar">{items.icon}</span>
            <span className="sidebarlabel">{items.name}</span>
          </Link>
        </li>
      </ul>
    );
  }
};

export default SidebarItem;
