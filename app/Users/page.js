import { AllUsers } from "@/app/Api/Action";
import { Suspense } from "react";
import UserCard from "../components/UserCard";

export default async function Users() {
  const usersData = await AllUsers();

  return (
    <Suspense fallback={<div>Users loading</div>}>
      <UserCard usersData={usersData} />
    </Suspense>
  );
}
