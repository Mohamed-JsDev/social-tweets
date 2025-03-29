"use client";
import { useState } from "react";
import Icons from "./Icons";
import CommentsList from "./CommentsList";
import Image from "next/image";
export default function PostCard({ usersData, postsData, photos }) {
  const [activeComments, setActiveComments] = useState(null);
  const getComments = async (postId) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      const postComments = data.filter((comment) => comment.postId === postId);

      setActiveComments({
        postId,
        comments: postComments,
      });
    } catch (error) {
      console.error("Error fetching comments:", error);
      setActiveComments(null);
    }
  };

  const closeComments = () => {
    setActiveComments(null);
  };

  const getAssignedUser = (postIndex) => {
    if (usersData.length > 1) {
      const userIndex = postIndex % usersData.length;
      return usersData[userIndex];
    } else {
      return usersData;
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      {postsData.map((post, index) => {
        const photoId = Math.floor(Math.random() * 20);
        const photo = photos[photoId];
        const assignedUser = getAssignedUser(index);
        if (!assignedUser) return null;

        const isCommentsActive = activeComments?.postId === post.id;

        return (
          <div
            className="w-full max-w-2xl bg-black text-white p-6 rounded-lg relative"
            key={post.id}
          >
            {/* Post Header */}
            <div className="flex items-center p-4 cursor-pointer">
              <img
                className="w-12 h-12 rounded-full me-3 object-cover"
                src={`/icon${assignedUser.id}.jpg`}
                alt="media"
              />
              <div className="flex flex-col">
                <h2 className="font-semibold">{assignedUser.username}</h2>
                <span className="text-gray-400 text-sm">
                  {assignedUser.name}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4 px-4">
              <h5 className="text-xl font-bold mb-2">{post.title}</h5>
              <p className="text-gray-300">{post.body}</p>
            </div>

            {/* Post Image (Placeholder) */}
            <div className="w-fit bg-gray-800 h-96 mb-4 flex items-center justify-center">
              <img className="w-1250 h-3/5" src={photo.image} alt="media" />
            </div>

            {/* Icons and Comments Section */}
            <div className="px-4">
              <Icons onClickComments={() => getComments(post.id)} />
            </div>
            {isCommentsActive && (
              <CommentsList
                comments={activeComments.comments}
                onClose={closeComments}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
