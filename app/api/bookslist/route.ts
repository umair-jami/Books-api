import { books } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Simulate data fetching (this can be replaced with actual DB fetching logic)
    const booksData = books;

    // Check if booksData is available
    if (!booksData || booksData.length === 0) {
      return NextResponse.json({ message: "No books found" }, { status: 404 });
    }

    // Returning the books data as a JSON response
    return NextResponse.json(booksData, { status: 200 });
  } catch (error) {
    // Handle errors and respond with a 500 status code
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
