import { books } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const booksData=books
    return NextResponse.json(booksData,{status:200})
}