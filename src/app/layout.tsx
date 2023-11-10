"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/layout/sidebar/sidebar";
import Header from "@/layout/header/header";
import { GlobalContextProvider } from "@/context/store";
import Main from "@/layout/main/main";
import { getServerSession } from "next-auth";
import AuthProvider from "./provider";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

interface ff {
  pathnames: string;
}

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const sesi = await getServerSession();
  const disableMenu: string[] = ["/login", "register"];
  const pathname = usePathname() as string;
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthProvider session={sesi}> */}
        <GlobalContextProvider>
          {!disableMenu.includes(pathname) && <Sidebar />}
          <Main>
            <Header />
            <section className="content">{children}</section>
          </Main>
        </GlobalContextProvider>
        {/* </AuthProvider> */}
        {/* <AuthProvider session={sesi}>
          <GlobalContextProvider>
            <Sidebar />
            <Main>
              <Header />
              <section className="content">{children}</section>
            </Main>
          </GlobalContextProvider>
        </AuthProvider> */}
      </body>
    </html>
  );
}
