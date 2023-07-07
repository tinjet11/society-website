"use client"
import { NavVertical, Blog,NavHorizontal } from "@/components";

export default function Home() {

  return (
    <>

      <NavVertical />

        <NavHorizontal />

        <div className="lg:ml-[250px]">
        <Blog />
        </div>
    </>
  );
}
