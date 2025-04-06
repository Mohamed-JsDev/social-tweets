import { Suspense } from "react";
import UserCard from "../components/UserCard";

export default async function Users() {
  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await usersRes.json();

  return (
    <Suspense fallback={<div>Users loading</div>}>
      <UserCard usersData={usersData} />
    </Suspense>
  );
}
