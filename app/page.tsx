"use client";

import Blog from "@/components/Blog";
import NavHorizontal from "@/components/NavHorizontal";
import NavVertical from "@/components/NavVertical";
import { useEffect, useState } from "react";

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
