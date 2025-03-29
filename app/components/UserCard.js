import Link from "next/link";

export default function UserCard({ usersData }) {
  const Users = usersData.map((user) => {
    return (
      <Link href={`Users/${user.id}`} key={user.id}>
        <div className=" relative group">
          <div className="flex items-start mb-4 last:mb-0 z-0">
            <img
              className="w-14 h-14 rounded-full border-2 border-blue-600 bg-gray-700 mr-3 flex-shrink-0"
              src={`/icon${user.id}.jpg`}
              alt="User"
            />
            <div>
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-gray-300 text-sm">{user.email}</p>
            </div>
          </div>
          <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-80 h-auto p-4 bg-black text-white border border-white rounded-lg shadow-lg z-50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <img
                className="w-16 h-16 rounded-full bg-gray-700 mr-4 flex-shrink-0"
                src={`/icon${user.id}.jpg`}
                alt={`User ${user.id}`}
              />
              <div>
                <p className="font-semibold text-md">{user.name}</p>
                <p className="text-gray-300 text-sm">{user.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-gray-300 text-sm block">
                {user.address.city}, {user.address.suite}, {user.address.street}
              </span>
              <p className="font-semibold text-sm">{user.phone}</p>
              <p className="font-semibold text-sm">{user.company.name}</p>
              <span className="text-gray-300 text-sm block">
                {user.website}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="mt-4 ">{Users}</div>;
}
