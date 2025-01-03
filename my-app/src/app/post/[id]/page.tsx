import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";

type Post = {
  id: string;
  title: string;
  description: string;
  image?: string; 
};

const posts: Post[] = [
  {
    id: "1",
    title: "How to Overcome Self-Doubt and Build Confidence",
    description:
      "Self-doubt is one of the most common obstacles that many of us face at some point in our lives. It whispers in our ears, convincing us that we’re not good enough, capable enough, or deserving of success. But here’s the truth: self-doubt is not a reflection of your abilities, it's a product of fear, insecurity, and negative thinking patterns. The good news is that self-doubt can be overcome, and building lasting confidence is entirely within your reach.Self-doubt is a natural feeling that everyone experiences at some point. It often makes us question our abilities and prevents us from pursuing our goals. However, it's important to understand that self-doubt is not a reflection of our true capabilities. Rather, it's driven by fear, insecurity, and negative thought patterns.To overcome self-doubt and build lasting confidence, start by shifting your mindset. Embrace a growth mindset, where you view challenges as opportunities for learning rather than threats. Taking action, even if imperfect, is crucial—doing something is often the best antidote to doubt. It's also important to reframe failures as valuable lessons rather than setbacks.Consistency is key to maintaining confidence. Surround yourself with positive influences, practice self-care, and set small, achievable goals. Over time, as you take action and grow from experiences, your confidence will strengthen.Remember, confidence is a skill that can be developed through practice and perseverance. The journey starts with believing in your own potential and taking that first step forward.",
    image: "/images/download.jpeg",
  },
  {
    id: "2",
    title: "5 Effective Habits for Living a More Productive and Fulfilling Life",
    description:
      "Living a productive and fulfilling life isn’t just about working harder or longer hours. It’s about creating habits that support your goals, well-being, and personal growth. Here are five habits that can help you live a more balanced, meaningful, and effective life:Prioritize Your Time: Focus on what matters most by identifying your top priorities and aligning your daily actions with them. This reduces time spent on distractions and ensures you're working towards your bigger goals.Practice Daily Reflection: Taking a few minutes at the end of each day to reflect on what went well, what could be improved, and what you’re grateful for can help you grow personally and professionally. This boosts self-awareness and helps you stay on track.Develop a Morning Routine: Start your day with intention by incorporating positive habits like exercise, meditation, or planning your day. A solid morning routine sets the tone for a productive day and keeps you energized.Take Care of Your Physical and Mental Health: Regular exercise, eating well, and practicing mindfulness are essential for maintaining energy, focus, and overall well-being. When your body and mind are healthy, you're more capable of achieving your goals.Learn Continuously: Whether it’s reading books, taking courses, or seeking new experiences, make continuous learning a habit. Expanding your knowledge helps you stay adaptable and opens doors to new opportunities.By adopting these five habits, you can increase your productivity, improve your overall happiness, and create a life that feels both fulfilling and purposeful.",
    image: "/images/images.jpeg",
  },
  {
    id: "3",
    title: "The Power of Gratitude: How to Shift Your Mindset for Success",
    description:
      "Gratitude is more than just a feel-good emotion; it’s a powerful tool that can dramatically change your mindset and lead to greater success and happiness. When you practice gratitude, you shift your focus from what you lack to what you already have, which helps create a positive mental framework.Shifting Your Focus: Gratitude allows you to focus on abundance rather than scarcity. Instead of worrying about what’s missing in your life, practicing gratitude helps you appreciate what you already have—whether it’s relationships, health, achievements, or opportunities. This shift in focus can reduce stress and increase feelings of contentment.Cultivating a Positive Outlook: Regularly acknowledging the things you're thankful for rewires your brain to notice more positives, even in challenging situations. This positive outlook leads to greater resilience, improved problem-solving, and more creativity, all of which are crucial for success.Improved Relationships: Expressing gratitude strengthens your relationships, whether personal or professional. When you regularly show appreciation for others, it deepens connections and fosters an environment of trust and cooperation.Boosted Mental and Emotional Well-being: Studies have shown that gratitude can lower levels of anxiety and depression, leading to improved mental health. It also enhances emotional well-being, making it easier to stay motivated and focused on long-term goals.Gratitude as a Success Catalyst: Successful people often practice gratitude, whether through journaling, reflection, or verbalizing appreciation. By keeping a gratitude practice, you reinforce the mindset that success is not just about achievement, but about appreciating the journey and growth along the way.By incorporating gratitude into your daily routine, you can shift your mindset from one of lack to one of abundance, setting the stage for greater success, happiness, and fulfillment in all areas of your life.",
    image: "/images/images1.jpeg",
  },
];

type PostProps = {
  params: {
    id: string;
  };
};

const Post: React.FC<PostProps> = ({ params }) => {
  const { id } = params;

 
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <p className="mt-4 text-lg">We couldn't find the post you're looking for.</p>
      </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <main className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-black text-center">
        {post.title}
      </h1>

      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      ) : (
        <div className="w-full h-60 bg-gray-300 rounded-md mt-4 flex items-center justify-center">
          <span className="text-gray-600">Image Not Available</span>
        </div>
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}

      <CommentSection  />
      <AuthorCard />
      <Footer />
      </div>
    </main>
    
  );
};

export default Post;
