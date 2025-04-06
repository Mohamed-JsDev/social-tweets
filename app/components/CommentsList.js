"use client";
import { XCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function CommentsList({ comments, onClose }) {
  const { theme } = useTheme();

  return (
    <div
      className={`
      fixed inset-0 z-50 flex flex-col items-center justify-center p-4
      ${
        theme === "dark"
          ? "bg-[var(--bg-dark)] bg-opacity-90"
          : "bg-[var(--bg-light)] bg-opacity-90"
      }
      transition-all duration-300
    `}
    >
      <div
        className={`
        w-full max-w-md rounded-lg shadow-xl overflow-hidden
        ${theme === "dark" ? "bg-[var(--card-dark)]" : "bg-[var(--card)]"}
        border ${
          theme === "dark"
            ? "border-[var(--border-dark)]"
            : "border-[var(--border)]"
        }
      `}
      >
        {/* comment head*/}
        <div
          className={`
          flex justify-between items-center p-4
          border-b ${
            theme === "dark"
              ? "border-[var(--border-dark)]"
              : "border-[var(--border)]"
          }
        `}
        >
          <h3
            className={`
            font-semibold ${
              theme === "dark"
                ? "text-[var(--text-dark)]"
                : "text-[var(--text)]"
            }
          `}
          >
            Comments ({comments.length})
          </h3>
          <button
            onClick={onClose}
            aria-label="Close comments"
            className={`
              p-1 rounded-full ${
                theme === "dark"
                  ? "hover:bg-[var(--bg-dark)] text-[var(--text-dark)]"
                  : "hover:bg-[var(--bg-light)] text-[var(--text)]"
              }
            `}
          >
            <XCircle size={24} />
          </button>
        </div>

        {/* Comments List */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {comments.map((comment) => {
            const photoId = Math.floor(Math.random() * 10);
            return (
              <div key={comment.id} className="mb-6 last:mb-0">
                <div className="flex items-start gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={`/icon${photoId}.jpg`}
                      alt={`User ${comment.id}`}
                      onError={(e) => {
                        e.target.src = "/default-user.jpg";
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`
                      font-semibold text-sm mb-1 ${
                        theme === "dark"
                          ? "text-[var(--text-dark)]"
                          : "text-[var(--text)]"
                      }
                    `}
                    >
                      {comment.name || comment.email.split("@")[0]}
                    </p>
                    <p
                      className={`
                      text-sm ${
                        theme === "dark"
                          ? "text-[var(--secondary-dark)]"
                          : "text-[var(--secondary)]"
                      }
                    `}
                    >
                      {comment.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*Add comments */}
        <form
          className={`
          p-4 border-t ${
            theme === "dark"
              ? "border-[var(--border-dark)]"
              : "border-[var(--border)]"
          }
        `}
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Add Comment.."
              className={`
                flex-1 py-2 px-3 rounded-full
                ${
                  theme === "dark"
                    ? "bg-[var(--bg-dark)] text-[var(--text-dark)] placeholder-[var(--secondary-dark)]"
                    : "bg-[var(--bg-light)] text-[var(--text)] placeholder-[var(--secondary)]"
                }
                focus:outline-none focus:ring-2 ${
                  theme === "dark"
                    ? "focus:ring-[var(--primary-dark)]"
                    : "focus:ring-[var(--primary)]"
                }
              `}
            />
            <button
              type="submit"
              className={`
                px-4 py-2 rounded-full font-medium
                ${
                  theme === "dark"
                    ? "bg-[var(--primary-dark)] text-white"
                    : "bg-[var(--primary)] text-white"
                }
                hover:opacity-90 transition-opacity
              `}
            >
              post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
