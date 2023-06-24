"use client"
import { NavVertical,NavHorizontal, Events } from "@/components";

export default function Home() {

  return (
    <>
      <NavVertical />

        <NavHorizontal />

        <div className="lg:ml-[250px]">
       <Events/>
        </div>
    </>
  );
}
