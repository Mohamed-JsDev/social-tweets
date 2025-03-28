import PostCard from "../../components/PostCard";
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
    <div className=" m-8 bg-black flex-col  rounded-lg shadow-lg">
      <div className="flex p-4 w-2/3 items-start justify-center  mb-4 gap-10 text-white border border-white">
        <img
          className="w-30 h-30 rounded-full bg-gray-700 mr-4 flex-shrink-0"
          src={`/icon${userData.id}.jpg`}
          alt={`User ${userData.id}`}
        />
        <div className="">
          <p className="font-semibold md:text-2xl">{userData.name}</p>
          <p className="font-semibold text-sm">{userData.phone}</p>
          <div className="space-y-2 gap-10">
            <span className="text-gray-300 text-sm block">
              {userData.address.city}, {userData.address.suite},{" "}
              {userData.address.street}
            </span>
            <p className="text-gray-300 text-sm">{userData.email}</p>
            <p className="font-semibold text-sm">{userData.company.name}</p>
            <span className="text-gray-300 text-sm block">
              {userData.website}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <PostCard postsData={userPosts} usersData={userData} />
      </div>
    </div>
  );
}
