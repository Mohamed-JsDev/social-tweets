import Link from "next/link";
import { Permanent_Marker } from "next/font/google";
import { Bell, UserPlus, Search } from "lucide-react";
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="bg-black p-10 w-full flex justify-center items-center ">
      <nav className="flex justify-between mx-3 w-4/5">
        <Link href="./" className="logo">
          <h1
            className={`${permanentMarker.className} text-3xl md:text-4xl  drop-shadow-lg`}
          >
            Social Tweets
          </h1>
        </Link>
        <div className="flex me-10 md:text-lg text-2xl pe-4">
          <input
            type="text"
            className=" w-88 px-2 border-2 border-white border-r-transparent rounded-ss-xl rounded-bl-xl focus:outline-none focus:cursor-e-resize  "
          />
          <Search
            className=" hover:text-gray-500 border-2  border-white rounded-tr-xl rounded-br-xl p-1  "
            size={40}
          />
          <Bell className=" hover:text-gray-500 mx-8" size={34} />
          <UserPlus className="hover:text-gray-500 " size={34} />
        </div>
      </nav>
    </header>
  );
}
