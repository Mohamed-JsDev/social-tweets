import PostCard from "../../components/PostCard";
import UserInfo from "../../components/UserInfo";
import Link from "next/link";
import { MoveLeft, Tags, Hash } from "lucide-react";
export default async function UserProfile({ params }) {
  const id = params.userId;
  {
    /* User data  */
  }
  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const userData = await userRes.json();
  {
    /* User Posts   */
  }
  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const postsData = await postsRes.json();
  const userPosts = postsData.filter((post) => parseInt(id) === post.userId);

  return (
    <div className=" p-8 bg-black w-full flex flex-col items-center justify-center   rounded-lg shadow-lg">
      <UserInfo user={userData} />
      <div className="flex flex-col justify-center items-center border-t border-gray-500  ">
        <div className="flex gap-4 ">
          <div className="border-t-2 p-4 border-t-white flex">
            <Hash />
            <p className="w-fit text-2xl  cursor-pointer ms-1 ">POSTS</p>
          </div>
          <div className="group  flex  text-xl p-4 cursor-pointer h-auto relative w-1/2   ">
            <Tags />
            <p>TAGGED</p>
            <span className="hidden  group-hover:block mt-2 w-60 absolute text-2xl left-0 top-10 p-2  border rounded border-white transition duration-700 ease-in-out  ">
              No Tags yet
            </span>
          </div>
        </div>
        <PostCard postsData={userPosts} usersData={userData} />
      </div>
      <Link
        href="/"
        className="p-2 absolute top-20 left-10 text-sky-400 text-2xl hover:opacity-20 rounded "
      >
        <MoveLeft /> Back{" "}
      </Link>
    </div>
  );
}
