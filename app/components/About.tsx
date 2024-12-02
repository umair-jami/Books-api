import React from "react";
import Image from "next/image";
import booksStore from "../assets/online_book_store_-_onlinebooksoutlet.webp"

export default function About() {
  return (
    <section className="h-[calc(100vh-4rem)] w-full px-10 py-12">
      <div>
        <Image src={booksStore} alt="img" />
      </div>
      <div className="flex items-center justify-center my-6">
        <div className="border-t border-gray-400 flex-grow"></div>
        <span className="px-4 text-gray-600 font-semibold">TRENDING NOW</span>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>
    </section>
  );
}
