import { books } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const booksData = books;

    if (!booksData || booksData.length === 0) {
      return NextResponse.json({ message: "No books found" }, { status: 404 });
    }

    return NextResponse.json(booksData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
