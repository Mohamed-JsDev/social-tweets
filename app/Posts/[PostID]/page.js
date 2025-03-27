// import { PostCard } from "../../components/PostCard";
export default async function PostID({ params }) {
  const id = params.PostID;
  // const postsRes = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`
  // );
  // const postsData = await postsRes.json();
  // console.log(postsData);

  return <div className="w-50 opacity-50 bg-black">PostID Page</div>;
  // <PostCard postsData={postsData} userData={id} />
}
