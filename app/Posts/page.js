import { Suspense } from "react";
import PostCard from "../components/PostCard";
export default async function Posts() {
  const postsRes = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=100"
  );
  const usersRes = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const postsData = await postsRes.json();
  const usersData = await usersRes.json();

  return (
    <div className="flex flex-col items-center mb-4 p-8">
      <h1> Feed</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostCard usersData={usersData} postsData={postsData} />
      </Suspense>
    </div>
  );
}
