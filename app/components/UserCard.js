"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function UserCard({ usersData }) {
  const { theme } = useTheme();

  return (
    <div className="w-full mt-8 md:mt-2">
      <h2 className="hidden xl:flex mb-4 text-2xl font-bold">
        Suggested for you
      </h2>

      <div
        className={`w-full p-2 rounded-lg ${
          theme === "dark"
            ? "text-[var(--text-dark)] bg-[var(--card-dark)]"
            : "text-[var(--text)] bg-[var(--card)]"
        }`}
      >
        {/* عرض أفقي على الشاشات الصغيرة وعمودي على الكبيرة */}
        <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2">
          {usersData.map((user) => (
            <Link
              href={`/Users/${user.id}`}
              key={user.id}
              className="min-w-[calc(100% / 6)] sm:min-w-[200px] lg:w-full hover:no-underline"
            >
              <div className="lg:relative group w-full">
                {/* البطاقة الأساسية */}
                <div
                  className={`flex flex-col lg:flex-row items-center p-3 rounded-lg transition-all duration-300 w-full ${
                    theme === "dark"
                      ? "hover:bg-[var(--bg-dark)]"
                      : "hover:bg-[var(--bg-light)]"
                  }`}
                >
                  <img
                    className={`w-16 h-16 rounded-full border-2 ${
                      theme === "dark"
                        ? "border-[var(--primary-dark)]"
                        : "border-[var(--primary)]"
                    } mr-3 flex-shrink-0 object-cover`}
                    src={`/icon${user.id}.jpg`}
                    alt={user.name}
                    onError={(e) => {
                      e.target.src = "/default-user.jpg";
                    }}
                  />
                  <div className="min-w-0">
                    <p
                      className={`font-semibold text-sm truncate ${
                        theme === "dark"
                          ? "text-[var(--text-dark)]"
                          : "text-[var(--text)]"
                      }`}
                    >
                      {user.name}
                    </p>
                    <p
                      className={`text-xs truncate ${
                        theme === "dark"
                          ? "text-[var(--secondary-dark)]"
                          : "text-[var(--secondary)]"
                      }`}
                    >
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* بطاقة التفاصيل - للشاشات الكبيرة فقط */}
                <div
                  className={`
                    hidden lg:group-hover:block absolute left-0 top-full mt-1
                    w-72 p-4 rounded-lg shadow-xl z-50 transition-all duration-200
                    ${
                      theme === "dark"
                        ? "bg-[var(--bg-dark)] border border-[var(--border-dark)]"
                        : "bg-[var(--card)] border border-[var(--border)]"
                    }
                  `}
                >
                  <div className="flex items-start mb-3">
                    <img
                      className={`w-14 h-14 rounded-full border-2 ${
                        theme === "dark"
                          ? "border-[var(--primary-dark)]"
                          : "border-[var(--primary)]"
                      } mr-4 flex-shrink-0 object-cover`}
                      src={`/icon${user.id}.jpg`}
                      alt={user.name}
                    />
                    <div className="min-w-0">
                      <p
                        className={`font-semibold text-md truncate ${
                          theme === "dark"
                            ? "text-[var(--text-dark)]"
                            : "text-[var(--text)]"
                        }`}
                      >
                        {user.name}
                      </p>
                      <p
                        className={`text-sm truncate ${
                          theme === "dark"
                            ? "text-[var(--secondary-dark)]"
                            : "text-[var(--secondary)]"
                        }`}
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p
                      className={`${
                        theme === "dark"
                          ? "text-[var(--secondary-dark)]"
                          : "text-[var(--secondary)]"
                      }`}
                    >
                      {user.address.street}, {user.address.suite}
                      <br />
                      {user.address.city}, {user.address.zipcode}
                    </p>

                    <p
                      className={`${
                        theme === "dark"
                          ? "text-[var(--text-dark)]"
                          : "text-[var(--text)]"
                      }`}
                    >
                      📞 {user.phone}
                    </p>

                    <p
                      className={`${
                        theme === "dark"
                          ? "text-[var(--text-dark)]"
                          : "text-[var(--text)]"
                      }`}
                    >
                      🏢 {user.company.name}
                    </p>

                    <p
                      className={`block truncate hover:underline ${
                        theme === "dark"
                          ? "text-[var(--primary-dark)]"
                          : "text-[var(--primary)]"
                      }`}
                    >
                      🌐 {user.website}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import { useTheme } from "../context/ThemeContext";

// export default function UserCard({ usersData }) {
//   const { theme } = useTheme();

//   return (
//     <div className=" relative mt-30 md:mt-2 w-fll overflow-visible ">
//       <h2 className="hidden xl:flex mb-1 text-2xl"> Suggested for you</h2>
//       <div
//         className={` space-y-4 p-2 rounded  flex  lg:flex-col  sm:overflow-x-scroll
//           ${
//             theme === "dark"
//               ? "text-[var(--text-dark)] bg-[var(--card-dark)]"
//               : "text-[var(--text)] bg-[var(--card)]"
//           } `}
//       >
//         {usersData.map((user) => (
//           <Link
//             href={`/Users/${user.id}`}
//             key={user.id}
//             className="flex w-full  hover:no-underline "
//           >
//             <div className="lg:relative group overflow-visible w-full ">
//               {/* main card*/}
//               <div
//                 className={`flex  sm:flex-col lg:flex-row  items-center w-full  p-2 rounded-lg transition-all duration-300 ${
//                   theme === "dark"
//                     ? "hover:bg-[var(--bg-dark)]"
//                     : "hover:bg-[var(--bg-light)]"
//                 }`}
//               >
//                 <img
//                   className={`w-14 h-14 rounded-full border-2 ${
//                     theme === "dark"
//                       ? "border-[var(--primary-dark)]"
//                       : "border-[var(--primary)]"
//                   } mr-3 flex-shrink-0 object-cover`}
//                   src={`/icon${user.id}.jpg`}
//                   alt={user.name}
//                   onError={(e) => {
//                     e.target.src = "/default-user.jpg"; // صورة افتراضية في حالة الخطأ
//                   }}
//                 />
//                 <div className="min-w-0">
//                   <p
//                     className={`font-semibold text-sm truncate ${
//                       theme === "dark"
//                         ? "text-[var(--text-dark)]"
//                         : "text-[var(--text)]"
//                     }`}
//                   >
//                     {user.name}
//                   </p>
//                   <p
//                     className={`text-xs truncate ${
//                       theme === "dark"
//                         ? "text-[var(--secondary-dark)]"
//                         : "text-[var(--secondary)]"
//                     }`}
//                   >
//                     {user.email}
//                   </p>
//                 </div>
//               </div>

//               {/* details card */}
//               <div
//                 className={`
//               hidden group-hover:block absolute left-0 top-full mt-1
//               w-72 p-4 rounded-lg shadow-xl z-50 transition-all duration-200
//               ${
//                 theme === "dark"
//                   ? "bg-[var(--bg-dark)] border border-[var(--border-dark)]"
//                   : "bg-[var(--card)] border border-[var(--border)]"
//               }
//             `}
//               >
//                 <div className="flex items-start mb-3">
//                   <img
//                     className={`w-14 h-14 rounded-full border-2 ${
//                       theme === "dark"
//                         ? "border-[var(--primary-dark)]"
//                         : "border-[var(--primary)]"
//                     } mr-4 flex-shrink-0 object-cover`}
//                     src={`/icon${user.id}.jpg`}
//                     alt={user.name}
//                   />
//                   <div className="min-w-0">
//                     <p
//                       className={`font-semibold text-md truncate ${
//                         theme === "dark"
//                           ? "text-[var(--text-dark)]"
//                           : "text-[var(--text)]"
//                       }`}
//                     >
//                       {user.name}
//                     </p>
//                     <p
//                       className={`text-sm truncate ${
//                         theme === "dark"
//                           ? "text-[var(--secondary-dark)]"
//                           : "text-[var(--secondary)]"
//                       }`}
//                     >
//                       {user.email}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <p
//                     className={`${
//                       theme === "dark"
//                         ? "text-[var(--secondary-dark)]"
//                         : "text-[var(--secondary)]"
//                     }`}
//                   >
//                     {user.address.street}, {user.address.suite}
//                     <br />
//                     {user.address.city}, {user.address.zipcode}
//                   </p>

//                   <p
//                     className={`${
//                       theme === "dark"
//                         ? "text-[var(--text-dark)]"
//                         : "text-[var(--text)]"
//                     }`}
//                   >
//                     📞 {user.phone}
//                   </p>

//                   <p
//                     className={`${
//                       theme === "dark"
//                         ? "text-[var(--text-dark)]"
//                         : "text-[var(--text)]"
//                     }`}
//                   >
//                     🏢 {user.company.name}
//                   </p>

//                   <p
//                     className={`block truncate hover:underline ${
//                       theme === "dark"
//                         ? "text-[var(--primary-dark)]"
//                         : "text-[var(--primary)]"
//                     }`}
//                   >
//                     🌐 {user.website}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import Link from "next/link";
// import { useTheme } from "../context/ThemeContext";

// export default function UserCard({ usersData }) {
//   const { theme } = useTheme();

//   return (
//     <div className="  mt-2 ">
//       <h2 className="hidden xl:flex mb-1 text-2xl"> Suggested for you</h2>
//       <div
//         className={`mt-4 space-y-4 p-2 rounded  flex-row  overflow-clip
//           ${
//             theme === "dark"
//               ? "text-[var(--text-dark)] bg-[var(--card-dark)]"
//               : "text-[var(--text)] bg-[var(--card)]"
//           } `}
//       >
//         {usersData.map((user) => (
//           <Link
//             href={`/Users/${user.id}`}
//             key={user.id}
//             className="flex-col hover:no-underline"
//           >
//             <div className="relative group ">
//               {/* البطاقة الأساسية */}
//               <div
//                 className={`flex items-start p-2 rounded-lg transition-all duration-300 ${
//                   theme === "dark"
//                     ? "hover:bg-[var(--bg-dark)]"
//                     : "hover:bg-[var(--bg-light)]"
//                 }`}
//               >
//                 <img
//                   className={`w-12 h-12 rounded-full border-2 ${
//                     theme === "dark"
//                       ? "border-[var(--primary-dark)]"
//                       : "border-[var(--primary)]"
//                   } mr-3 flex-shrink-0 object-cover`}
//                   src={`/icon${user.id}.jpg`}
//                   alt={user.name}
//                   onError={(e) => {
//                     e.target.src = "/default-user.jpg"; // صورة افتراضية في حالة الخطأ
//                   }}
//                 />
//                 <div className="min-w-0">
//                   <p
//                     className={`font-semibold text-sm truncate ${
//                       theme === "dark"
//                         ? "text-[var(--text-dark)]"
//                         : "text-[var(--text)]"
//                     }`}
//                   >
//                     {user.name}
//                   </p>
//                   <p
//                     className={`text-xs truncate ${
//                       theme === "dark"
//                         ? "text-[var(--secondary-dark)]"
//                         : "text-[var(--secondary)]"
//                     }`}
//                   >
//                     {user.email}
//                   </p>
//                 </div>
//               </div>

//               {/* details card */}
//               <div
//                 className={`
//               hidden group-hover:block absolute left-0 top-full mt-1
//               w-72 p-4 rounded-lg shadow-xl z-50 transition-all duration-200
//               ${
//                 theme === "dark"
//                   ? "bg-[var(--bg-dark)] border border-[var(--border-dark)]"
//                   : "bg-[var(--card)] border border-[var(--border)]"
//               }
//             `}
//               >
//                 <div className="flex items-start mb-3">
//                   <img
//                     className={`w-14 h-14 rounded-full border-2 ${
//                       theme === "dark"
//                         ? "border-[var(--primary-dark)]"
//                         : "border-[var(--primary)]"
//                     } mr-4 flex-shrink-0 object-cover`}
//                     src={`/icon${user.id}.jpg`}
//                     alt={user.name}
//                   />
//                   <div className="min-w-0">
//                     <p
//                       className={`font-semibold text-md truncate ${
//                         theme === "dark"
//                           ? "text-[var(--text-dark)]"
//                           : "text-[var(--text)]"
//                       }`}
//                     >
//                       {user.name}
//                     </p>
//                     <p
//                       className={`text-sm truncate ${
//                         theme === "dark"
//                           ? "text-[var(--secondary-dark)]"
//                           : "text-[var(--secondary)]"
//                       }`}
//                     >
//                       {user.email}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <p
//                     className={`${
//                       theme === "dark"
//                         ? "text-[var(--secondary-dark)]"
//                         : "text-[var(--secondary)]"
//                     }`}
//                   >
//                     {user.address.street}, {user.address.suite}
//                     <br />
//                     {user.address.city}, {user.address.zipcode}
//                   </p>

//                   <p
//                     className={`${
//                       theme === "dark"
//                         ? "text-[var(--text-dark)]"
//                         : "text-[var(--text)]"
//                     }`}
//                   >
//                     📞 {user.phone}
//                   </p>

//                   <p
//                     className={`${
//                       theme === "dark"
//                         ? "text-[var(--text-dark)]"
//                         : "text-[var(--text)]"
//                     }`}
//                   >
//                     🏢 {user.company.name}
//                   </p>

//                   <p
//                     className={`block truncate hover:underline ${
//                       theme === "dark"
//                         ? "text-[var(--primary-dark)]"
//                         : "text-[var(--primary)]"
//                     }`}
//                   >
//                     🌐 {user.website}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
