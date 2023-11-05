import {
  FaThLarge,
  FaChevronDown,
  FaGrinHearts,
  FaJsSquare,
  FaStream,
} from "react-icons/fa";

export const ItemSidebar = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FaThLarge size={"17"} />,
    subMenu: [],
  },
  {
    name: "User",
    path: "/user",
    icon: <FaGrinHearts size={"17"} />,
    subMenu: [
      { name: "Dashboard", path: "/user/daftaruser" },
      { name: "Dashboard", path: "/user" },
    ],
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <FaJsSquare size={"17"} />,
    subMenu: [],
  },
];
