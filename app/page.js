import Header from "./components/Header";
import Posts from "./Posts/page";
import Users from "./Users/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto  xl:px-12 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Users */}
          <div className="w-ful lg:w-1/4">
            <Users />
          </div>
          {/* Main Content - Posts  */}
          <div className="lg:w-3/4">
            <Posts />
          </div>
        </div>
      </main>
    </div>
  );
}
