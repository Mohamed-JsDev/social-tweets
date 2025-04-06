"use client";
import { useState } from "react";
import Icons from "./Icons";
import CommentsList from "./CommentsList";
import { useTheme } from "../context/ThemeContext";

export default function PostCard({ usersData, postsData, comments }) {
  const { theme } = useTheme();
  const [activeComments, setActiveComments] = useState(null);

  const getComments = async (postId) => {
    try {
      const postComments = comments.filter(
        (comment) => comment.postId === postId
      );
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
    <div className="flex flex-col items-center gap-8 p-4 md:p-8">
      {postsData.map((post, index) => {
        const assignedUser = getAssignedUser(index);
        if (!assignedUser) return null;

        const isCommentsActive = activeComments?.postId === post.id;

        return (
          <div
            className={`w-full max-w-2xl p-6 rounded-lg relative border transition-colors duration-300 ${
              theme === "dark"
                ? "bg-[var(--card-dark)] border-[var(--border-dark)]"
                : "bg-[var(--card)] border-[var(--border)]"
            }`}
            key={post.id}
          >
            {/* Post Header */}
            <div className="flex items-center p-4 cursor-pointer">
              <img
                className="w-10 h-10 md:w-12 md:h-12 rounded-full me-3 object-cover"
                src={`/icon${assignedUser.id}.jpg`}
                alt="media"
              />
              <div className="flex flex-col">
                <h2
                  className={`font-semibold ${
                    theme === "dark"
                      ? "text-[var(--text-dark)]"
                      : "text-[var(--text)]"
                  }`}
                >
                  {assignedUser.username}
                </h2>
                <span
                  className={`text-sm ${
                    theme === "dark"
                      ? "text-[var(--secondary-dark)]"
                      : "text-[var(--secondary)]"
                  }`}
                >
                  {assignedUser.name}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4 px-4">
              <h5
                className={`text-lg md:text-xl font-bold mb-2 ${
                  theme === "dark"
                    ? "text-[var(--text-dark)]"
                    : "text-[var(--text)]"
                }`}
              >
                {post.title}
              </h5>
              <p
                className={`${
                  theme === "dark"
                    ? "text-[var(--text-dark)]"
                    : "text-[var(--text)]"
                }`}
              >
                {post.body}
              </p>
            </div>

            {/* Post Image (Placeholder) */}
            <div
              className={`w-full rounded mb-4 h-64 md:h-96 flex items-center justify-center ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <span
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Post Image
              </span>
            </div>

            {/* Icons and Comments Section */}
            <div className="px-4">
              <Icons
                onClickComments={() => getComments(post.id)}
                theme={theme}
              />
            </div>

            {isCommentsActive && (
              <CommentsList
                comments={activeComments.comments}
                onClose={closeComments}
                theme={theme}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
