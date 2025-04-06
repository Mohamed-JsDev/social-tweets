"use client";
import Link from "next/link";
import { Permanent_Marker } from "next/font/google";
import { Bell, UserPlus, Search, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const { theme } = useTheme();

  return (
    <header
      className={`fixed top-0 w-full px-8 py-2 z-50 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[var(--bg-dark)] text-[var(--text-dark)] border-[var(--border-dark)]"
          : "bg-[var(--bg-light)] text-[var(--text)] border-[var(--border)]"
      }`}
    >
      <div className="container mx-auto  max-sm:px-1 lg:px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo Section - Always visible */}
          <Link href="/" className="flex items-center shrink-0 max-sm:-ms-3 ">
            <h1
              className={`${permanentMarker.className} text-2xl sm:text-3xl `}
            >
              Social Tweets
            </h1>
          </Link>
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center mx-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className={`w-full py-2 px-4 rounded-full border transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-[var(--card-dark)] text-[var(--text-dark)] border-[var(--border-dark)] placeholder-[var(--secondary-dark)]"
                    : "bg-[var(--card)] text-[var(--text)] border-[var(--border)] placeholder-[var(--secondary)]"
                } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  theme === "dark"
                    ? "focus:ring-[var(--text-dark)]"
                    : "focus:ring-[var(--text)]"
                }`}
              />
              <Search
                className={`absolute right-3 top-2.5 ${
                  theme === "dark"
                    ? "text-[var(--secondary-dark)]"
                    : "text-[var(--secondary)]"
                }`}
                size={20}
              />
            </div>
          </div>
          {/* Mobile Search Button - Visible only on mobile */}
          <div className="flex items-center  space-x-6 max-sm:space-x-1">
            {/* Notification Bell */}
            <button
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === "dark"
                  ? "hover:bg-[var(--card-dark)] text-[var(--secondary-dark)]"
                  : "hover:bg-[var(--card)] text-[var(--secondary)]"
              }`}
            >
              <Bell size={22} />
            </button>

            {/* User Plus */}
            <button
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === "dark"
                  ? "hover:bg-[var(--card-dark)] text-[var(--secondary-dark)]"
                  : "hover:bg-[var(--card)] text-[var(--secondary)]"
              }`}
            >
              <UserPlus size={22} />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button - Visible only on mobile */}
          </div>
        </nav>

        {/* Mobile Search Bar - Appears when needed */}
        <div className="md:hidden pb-3 pt-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 px-4 rounded-full border transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-[var(--card-dark)] text-[var(--text-dark)] border-[var(--border-dark)]"
                  : "bg-[var(--card)] text-[var(--text)] border-[var(--border)]"
              }`}
            />
            <Search
              className={`absolute right-3 top-2.5 ${
                theme === "dark"
                  ? "text-[var(--secondary-dark)]"
                  : "text-[var(--secondary)]"
              }`}
              size={20}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
