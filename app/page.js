import Posts from "./Posts/page";
import Users from "./Users/page";

export default function Home() {
  return (
    <div className="flex">
      <Users />
      <Posts />
    </div>
  );
}
