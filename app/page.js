import Header from "./components/Header";
import Posts from "./Posts/page";
import Users from "./Users/page";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex  justify-center">
        <Users />
        <Posts />
      </div>
    </div>
  );
}
