"use client";

import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import UserInfo from "../../components/UserInfo";
import Link from "next/link";
import { MoveLeft, Tags, Hash } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "../../components/Footer";
import { Comments, Photo, Post, UserId } from "@/app/Api/Action";

import { use } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function UserProfile(props) {
  const params = use(props.params);
  const id = params.userId;
  const [userData, setUserData] = useState(null);
  const [postsData, setPostsData] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      const [user, posts, comms, imgs] = await Promise.all([
        UserId(id),
        Post(),
        Comments(),
        Photo(),
      ]);

      setUserData(user);
      setPostsData(posts);
      setComments(comms);
      setPhotos(imgs);
    }

    fetchData();
  }, [id]);

  const userPosts = postsData.filter((post) => parseInt(id) === post.userId);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading user profile...
      </div>
    );
  }

  return (
    <>
      <div
        className={` p-8  w-full flex flex-col items-center justify-center rounded-lg shadow-lg ${
          theme === "dark"
            ? "bg-[var(--card-dark)] text-white"
            : "bg-[var(--card)] text-black "
        }`}
      >
        <Header />

        <div className="mt-16">
          <UserInfo user={userData} />
        </div>

        <div className="flex flex-col justify-center items-center border-t border-gray-500">
          <div className="flex gap-4 text-white">
            <div className="border-t-2 p-4 border-t-white flex">
              <Hash />
              <p className="w-fit text-2xl cursor-pointer ms-1">POSTS</p>
            </div>
            <div className="group flex text-xl p-4 cursor-pointer h-auto relative w-1/2 transition duration-2000 ease-in-out">
              <Tags />
              <p>TAGGED</p>
              <span className="hidden group-hover:block mt-2 w-60 absolute text-2xl left-0 top-10 p-2 border rounded border-white">
                No Tags yet
              </span>
            </div>
          </div>

          <PostCard
            postsData={userPosts}
            usersData={userData}
            comments={comments}
            photos={photos}
          />
        </div>

        <Link
          href="/"
          className="p-2 absolute top-20 left-100 text-sky-400 text-2xl hover:opacity-20 rounded"
        >
          <MoveLeft /> Back
        </Link>
      </div>

      <Footer />
    </>
  );
}
