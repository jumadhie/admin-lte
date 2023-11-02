"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useGlobalContext } from "@/context/store";
import { useEffect } from "react";

export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext();

  const tesButton = () => {
    setUserId("diyan");
  };

  return (
    <section>
      <h1>halaman Dashboard {userId}</h1>
      {/* <button onClick={tesButton}>tes</button> */}
      <button className="btn btn-primary">Button</button>
    </section>
  );
}
