 "use client";

import Nav from "@/components/Nav";
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
    <Nav/>
    <div className="">
      <h2>Users</h2>
      <ul>
      {/*   {userList.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
            <br />
            {user.website}
          </li>
        ))} */}
      </ul>
    </div>
    </>
  );
}

export interface userProps {
  id: number;
  name: string;
  website: string;
}
 