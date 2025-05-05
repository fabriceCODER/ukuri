"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Comment } from "@/lib/types"; // adjust path

export default function CommentsPage({ articleId }: { articleId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    api.comments.getAll(articleId).then((res) => {
      if (res.data) setComments(res.data); // ✅ Now correctly typed
    });
  }, [articleId]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      {comments.length ? (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="bg-white p-4 shadow rounded">
              <p className="text-sm text-gray-700">{c.content}</p>
              <span className="text-xs text-gray-500">— {c.author.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
    </div>
  );
}
