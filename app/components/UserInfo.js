import Image from "next/image";

export default async function UserInfo({ user }) {
  return (
    <div className=" p-4  w-1/2 flex justify-around  mb-4 text-white ">
      <Image
        src={`/icon${user.id}.jpg`}
        alt={`User ${user.id}`}
        width={204}
        height={50}
        className=" rounded-full"
      />
      <div>
        <p className="font-semibold md:text-2xl my-4 ">{user.name}</p>
        <p className="font-semibold text-sm ">{user.phone}</p>
        <div className="space-y-2 gap-10">
          <span className="text-gray-300 text-sm block">
            {user.address.city}, {user.address.suite}, {user.address.street}
          </span>
          <p className="text-gray-300 text-sm">{user.email}</p>
          <p className="font-semibold text-sm">{user.company.name}</p>
          <span className="text-gray-300 text-sm block">{user.website}</span>
        </div>
      </div>
    </div>
  );
}
