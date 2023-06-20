"use client";

import Blog from "@/components/Blog";
import NavHorizontal from "@/components/NavHorizontal";
import NavVertical from "@/components/NavVertical";
import { useEffect, useState } from "react";

export default function Home({ }: { users: userProps[] }) {
  const [userList, setUserList] = useState<userProps[]>([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUserList(data))
      .catch((error) => console.error(error));
  }, []);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

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

export interface userProps {
  id: number;
  name: string;
  website: string;
}
