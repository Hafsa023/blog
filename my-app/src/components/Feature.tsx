import React from "react";

export default function Feature() {
  return (
    <main>
      <section className="py-8 bg-neutral-50  ">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-center animate-fade-in-up transition-all duration-500 transform hover:translate-y-[5px] text-slate-900">
        Empowerment & Wellness!!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 animate-fade-in">
        Whether you’re just starting out or looking to deepen your practice, remember that empowerment and wellness are journeys, not destinations. Celebrate every milestone, no matter how small, and keep moving forward with intention. It's about progress, not perfection.

If you’re ready to unlock your fullest potential and achieve the wellness you deserve, this space will provide the knowledge, tools, and inspiration to help you along the way. Take the first step toward becoming the best version of yourself—because you are worthy of all the health, happiness, and success you desire.
        </p>
        <div className="mx-auto max-w-7xl px-5 ">
          <h1 className="text-3xl font-bold text-center my-8 text-slate-600 animate-color-change">
            Exploring our categories
          </h1>
          <div className="flex justify-between lg:justify-center lg:gap-16 md:justify-center md:gap-12 ">
            {["Self-doubt ", "Effective Habits ", "gratitude"].map(
              (category, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg shadow-lg hover:bg-purple-400 transition duration-300 ease-in-out p-6 bg-white flex
    items-center justify-center text-neutral-600 hover:text-black transform hover:scale-105 cursor-pointer "
                >
                  <p className="text-center text-lg font-semibold ">
                    {category}
                  </p>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
                </div>
              )
            )}
          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
        This kind of introduction can set the tone for a blog, article, or even an entire section dedicated to Empowerment & Wellness, positioning it as a space for personal development, holistic health, and overall life improvement.



        </p>
      </section>
    </main>
  );
}
