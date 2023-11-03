"use client";

import { useGlobalContext } from "@/context/store";

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
