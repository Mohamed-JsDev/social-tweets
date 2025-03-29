import { Suspense } from "react";
import PostCard from "../components/PostCard";
export default async function Posts() {
  const postsRes = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=100"
  );
  const usersRes = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const resPhoto = await fetch("https://fakestoreapi.com/products");
  const photos = await resPhoto.json();

  const postsData = await postsRes.json();
  const usersData = await usersRes.json();

  return (
    <div className="flex flex-col items-center px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <PostCard usersData={usersData} postsData={postsData} photos={photos} />
      </Suspense>
    </div>
  );
}
