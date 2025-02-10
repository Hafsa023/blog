import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Link from "next/link";
import Image from "next/image";
interface BlogCardProps {
  post: {
    id: any;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4 ">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on : {new Date(post.date).toLocaleDateString()}
        </p>
        <Link
  href={`/post/${post.id}`} 
  className={`w-full px-6 text-white rounded hover:bg-purple-500 ${
    isDarkBackground ? "bg-purple-600 hover:bg-purple-500" : "bg-purple-600 hover:bg-purple-500"
  }`}
>
  Read More...
</Link>

      </div>
    </Card>
  );
}
