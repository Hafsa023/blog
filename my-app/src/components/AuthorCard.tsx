import React from "react";

export default function AuthorCard() {
  return (
    <main className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4  border-2  "
          src="../images/pfp.webp"
          alt=""
        />
        <div>
          <h3 className="text-xl font-bold 0">Hafsa Sultan</h3>
          <p className="text-slate-500 ">
          
            Intermediate Student | web developer
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Hafsa is a passionate and dedicated web developer with a background in
        science. She has a keen eye for detail and a strong communication
        skills. She has recently completed matriculation . She is always eager
        to learn and grow in her field. Hafsa is a natural problem solver and a
        great team player. Her goal is to create impactful and user-friendly web
        applications.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="https://github.com/Hafsa023"
          className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-700 transition duration-300 "
        >
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/hafsa-sultan-45a6b6334/"
          target="_blank"
          className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-700 transition duration-300  "
        >
          Linkedln
        </a>
      </div>
    </main>
  );
}
