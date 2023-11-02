"use client";

import { useGlobalContext } from "@/context/store";

type LayoutProps = { children?: React.ReactNode };

const Main = ({ children }: LayoutProps) => {
  const { collapse } = useGlobalContext();
  return (
    <section className={`main ${collapse ? "main-minimaze" : ""}`}>
      {children}
    </section>
  );
};

export default Main;
