import { Suspense } from "react";
import UserCard from "../components/UserCard";

export default async function Users() {
  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await usersRes.json();

  return (
    <div className="flex-col bold m-4 mt-8">
      <h2 className="mb-4"> Suggested for you</h2>
      <Suspense fallback={<div>Users loading</div>}>
        <UserCard usersData={usersData} />
      </Suspense>
    </div>
  );
}
