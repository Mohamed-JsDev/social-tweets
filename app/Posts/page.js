import { Suspense } from "react";
import PostCard from "../components/PostCard";
import { Comments, Post, AllUsers, Photo } from "./../Api/Action";
export default async function Posts() {
  const postsData = await Post();
  const usersData = await AllUsers();
  const comments = await Comments();
  const photos = await Photo();
  return (
    <div className="flex flex-col items-center px-8">
      <Suspense fallback={<div>posts Loading...</div>}>
        <PostCard
          usersData={usersData}
          postsData={postsData}
          comments={comments}
          photos={photos}
        />
      </Suspense>
    </div>
  );
}
