import { CircleX } from "lucide-react";

export default function CommentsList({ comments, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-lg overflow-hidden">
        {/* Comments Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="font-semibold">Comments</h3>
          <button onClick={onClose} className="text-white">
            <CircleX size={24} />
          </button>
        </div>

        {/* Comments List */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {comments.map((comment) => {
            const photoId = Math.floor(Math.random() * 10);
            return (
              <div key={comment.id} className="mb-4 last:mb-0">
                <div className="flex items-start">
                  <img
                    className="w-12 h-12 rounded-full bg-gray-700 mr-3 flex-shrink-0 "
                    src={`/icon${photoId}.jpg`}
                    alt={`User ${comment.id}`}
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {comment.email.split("@")[0]}
                    </p>
                    <p className="text-gray-300 text-sm">{comment.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Comment Input */}
        <form className="p-4 border-t border-gray-800">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Add a comment..."
              className="bg-transparent border-none w-full text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="text-blue-500 font-semibold">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
