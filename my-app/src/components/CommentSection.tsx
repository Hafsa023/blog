"use client"

import React, { useState, useEffect } from "react";

interface Comment {
  id: string;
  author: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments array changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };

      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
    }
  };

  // Handle saving an edited comment
  const handleSaveComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, author: authorName, text: newComment }
          : comment
      );

      setComments(updatedComments);
      setNewComment(""); // Clear the input fields after saving
      setAuthorName("");
      setEditingCommentId(null); // Reset the editing mode
    }
  };

  // Handle starting the edit process for a comment
  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setAuthorName(commentToEdit.author);
      setNewComment(commentToEdit.text);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments Section</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="card">
              <div className="card-content">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <button
                  onClick={() => handleEditComment(comment.id)}
                     className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-400">No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-2"
        />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2"
        />
        <button
          onClick={editingCommentId ? handleSaveComment : handleAddComment}
          className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
        >
          {editingCommentId ? "Save" : "Submit"}
        </button>
      </div>
    </div>
  );
}
