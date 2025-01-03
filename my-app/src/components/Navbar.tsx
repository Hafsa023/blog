
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg bg-violet-600">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center space-x-4">
          <Link href="/" className="hover:text-slate-700 transition-colors duration-300 transform hover:scale-105">
            Home
          </Link>
          <Link href="/about" className="hover:text-slate-700 transition-colors duration-300 transform hover:scale-105">
            About
          </Link>
          <Link href="/blog" className="hover:text-slate-700 transition-colors duration-300 transform hover:scale-105">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-slate-700 transition-colors duration-300 transform hover:scale-105">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
