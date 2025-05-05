"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

export default function UserInfo({ user }) {
  const { theme } = useTheme();
  return (
    <div
      className={`p-4 flex justify-between space-x-10  mb-4 ${
        theme === "dark"
          ? "bg-[var(--card-dark)] text-white"
          : "bg-[var(--card)] text-black "
      }`}
    >
      <Image
        src={`/icon${user.id}.jpg`}
        alt={`User ${user.id}`}
        width={180}
        height={30}
        className=" rounded-full"
      />
      <div>
        <p className="font-semibold md:text-2xl my-4 ">{user.name}</p>
        <p className="font-semibold text-sm ">📞 {user.phone}</p>
        <div className="space-y-2 gap-10">
          <span className=" text-sm block">
            📌 {user.address.city}, {user.address.suite}, {user.address.street}
          </span>
          <p className=" text-sm">📩 {user.email}</p>
          <p className="font-semibold text-sm"> 🏢 {user.company.name}</p>
          <span className=" text-sm block">🌐{user.website}</span>
        </div>
      </div>
    </div>
  );
}
