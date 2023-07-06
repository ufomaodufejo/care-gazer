import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
