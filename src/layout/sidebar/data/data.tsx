import {
  FaThLarge,
  FaChevronDown,
  FaGrinHearts,
  FaJsSquare,
  FaStream,
} from "react-icons/fa";

export const Data = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FaThLarge size={"17"} />,
  },
  {
    name: "User",
    path: "#",
    icon: <FaGrinHearts size={"17"} />,
    subMenu: [
      { name: "Daftar User", path: "/user" },
      { name: "Permohonan", path: "/user/user1" },
    ],
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <FaJsSquare size={"17"} />,
  },
];
