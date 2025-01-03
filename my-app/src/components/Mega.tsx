import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "How to Overcome Self-Doubt and Build Confidence"
,
      description:
     " Offer practical advice on building self-esteem, combating imposter syndrome, and improving personal confidence",
      date: "01-january-2025",

      imageUrl:"/images/download.jpeg"

    },
    {
      id: "2",
      title: "5 Effective Habits for Living a More Productive and Fulfilling Life",
      description:
        "Share actionable daily habits that can help anyone improve their productivity and overall happiness.",
      date: "01-january-2025",
      imageUrl: "/images/images.jpeg",
    },
    {
      id: "3",
      title: "The Power of Gratitude: How to Shift Your Mindset for Success",
      description:
        "Explore how gratitude practices can improve mental health, foster personal growth, and create better outcomes in life.",
      date: "01-january-2025",
      imageUrl: "/images/images1.jpeg",
    },
  ];
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center my-8 hover:text-purple-600">
      Lifestyle & Personal Growth
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
