import React from "react";
import love from "../../assets/rulesoflove.webp";
import harry from "../../assets/harry.webp";
import ends from "../../assets/endswith.webp";
import silent from "../../assets/silent.webp";
import Image from "next/image";

async function getBooks() {
  let response = await fetch("/api/bookslist");
  let data = await response.json();
  return data;
}

const imgBox = [love, harry, ends, silent];

export default async function Books() {
  const books = await getBooks();

  return (
    <section className="min-h-[calc(100vh-4rem)] w-full px-4 py-8 lg:px-10">
      <div className="h-full container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((item: any, i: any) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-4 justify-center items-center bg-slate-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={imgBox[i % imgBox.length]}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-md"
                />
                <h1
                  className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.title}
                </h1>
                <p
                  className="text-gray-600 text-sm md:text-base font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.author}
                </p>
                <p
                  className="text-gray-500 text-sm md:text-base"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.genre}
                </p>
                <p
                  className="text-gray-500 text-sm md:text-base text-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
