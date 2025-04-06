"use client";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Icons({ onClickComments }) {
  const { theme } = useTheme();
  const [love, setLove] = useState(false);
  const [save, setSave] = useState(false);

  const iconColor =
    theme === "dark"
      ? "text-[var(--secondary-dark)]"
      : "text-[var(--secondary)]";
  const hoverColor =
    theme === "dark"
      ? "hover:text-[var(--text-dark)]"
      : "hover:text-[var(--text)]";
  const activeColor = "text-red-600";
  const saveActiveColor = "text-yellow-400";

  return (
    <div
      className={`flex justify-between items-center pt-3 border-t ${
        theme === "dark"
          ? "border-[var(--border-dark)]"
          : "border-[var(--border)]"
      }`}
    >
      <div className="flex space-x-2 sm:space-x-4">
        <button
          className={`p-1 rounded-full transition-colors ${hoverColor} ${
            love ? activeColor : iconColor
          }`}
          onClick={() => setLove(!love)}
          aria-label={love ? "Remove like" : "Like post"}
        >
          <Heart
            size={20}
            strokeWidth={love ? 2.5 : 1.5}
            fill={love ? "currentColor" : "none"}
          />
        </button>

        <button
          className={`p-1 rounded-full transition-colors ${hoverColor} ${iconColor}`}
          onClick={onClickComments}
          aria-label="Add comment"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
        </button>

        <button
          className={`p-1 rounded-full transition-colors ${hoverColor} ${iconColor}`}
          aria-label="Share post"
        >
          <Send size={20} strokeWidth={1.5} />
        </button>
      </div>

      <button
        className={`p-1 rounded-full transition-colors ${
          save ? saveActiveColor : iconColor
        } ${!save && hoverColor}`}
        onClick={() => setSave(!save)}
        aria-label={save ? "Remove from saved" : "Save post"}
      >
        <Bookmark
          size={20}
          strokeWidth={save ? 2.5 : 1.5}
          fill={save ? "currentColor" : "none"}
        />
      </button>
    </div>
  );
}
