"use client";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Icons({ onClickComments }) {
  const [love, setLove] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <button
          className={`m-2 cursor-pointer hover:text-gray-500  ${
            love ? "text-red-600" : "text-white"
          }`}
          onClick={() => setLove(!love)}
        >
          <abbr title="love">
            <Heart strokeWidth={love ? 4 : 2} />
          </abbr>
        </button>

        <button
          className="m-2 cursor-pointer text-white hover:text-gray-500"
          onClick={onClickComments}
        >
          <abbr title="comment">
            <MessageCircle />
          </abbr>
        </button>

        <button className="m-2 cursor-pointer text-white hover:text-gray-500">
          <abbr title="send">
            <Send />
          </abbr>
        </button>
      </div>
      <button
        className={`m-2 cursor-pointer hover:text-gray-500 ${
          save ? "text-yellow-400" : "text-white"
        }`}
        onClick={() => setSave(!save)}
      >
        <abbr title="save">
          <Bookmark
            strokeWidth={save ? 4 : 2}
            fill={save ? "currentColor" : "none"}
          />
        </abbr>
      </button>
    </div>
  );
}

// "use client";
// import { Bookmark } from "lucide-react";
// import { Heart } from "lucide-react";
// import { MessageCircle } from "lucide-react";
// import { Send } from "lucide-react";
// import { useState } from "react";

// export default function Icons({ onClickComments }) {
//   const [love, setLove] = useState(false);
//   const [save, setSave] = useState(false);

//   return (
//     <div className="flex">
//       <button
//         className={`m-2 cursor-pointer ${
//           love ? "text-red-600 rounded" : "text-white"
//         }`}
//         onClick={() => setLove(!love)}
//       >
//         <abbr title="love">
//           <Heart strokeWidth={love ? 4 : 2} />
//         </abbr>
//       </button>

//       {/*onClickComments */}
//       <button className="m-2 cursor-pointer" onClick={onClickComments}>
//         <abbr title="comment">
//           <MessageCircle />
//         </abbr>
//       </button>
//       <button className="m-2 cursor-pointer">
//         <abbr title="send">
//           <Send />
//         </abbr>
//       </button>

//       <button
//         className={`m-2 cursor-pointer ${
//           save ? "bg-white text-black rounded" : "bg-black"
//         }`}
//         onClick={() => setSave(!save)}
//       >
//         <abbr title="save">
//           <Bookmark strokeWidth={save ? 4 : 2} />
//         </abbr>
//       </button>
//     </div>
//   );
// }

// "use client";
// import { Bookmark } from "lucide-react";
// import { Heart } from "lucide-react";
// import { MessageCircle } from "lucide-react";
// import { useState } from "react";
// export default function Icons() {
//   const [love, setLove] = useState(false);
//   const [save, setSave] = useState(false);
//   return (
//     <div className="flex  ">
//       <button
//         className={`m-2 cursor-pointer + ${
//           love ? " text-red-600  rounded" : " text-white"
//         }`}
//         onClick={() => setLove(!love)}
//       >
//         <abbr title="love">
//           <Heart strokeWidth={love ? 4 : 2} />
//         </abbr>
//       </button>
//       <abbr title="comment">
//         <button className="m-2 cursor-pointer">
//           <MessageCircle />
//         </button>
//       </abbr>
//       <abbr title="save">
//         <button
//           className={`m-2 cursor-pointer + ${
//             save ? " bg-white text-black rounded " : " bg-black"
//           }`}
//           onClick={() => setSave(!save)}
//         >
//           <Bookmark strokeWidth={save ? 4 : 2} />{" "}
//         </button>
//       </abbr>
//     </div>
//   );
// }
