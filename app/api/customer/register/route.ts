import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim();
    const password = String(body.password || "");

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    const [existing] = await db.query(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    if ((existing as any[]).length > 0) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const [result] = await db.query(
      `INSERT INTO users
        (name, email, phone, password_hash, role)
       VALUES (?, ?, ?, ?, 'customer')`,
      [name, email, phone || null, passwordHash]
    );

    const userId = (result as any).insertId;

    return NextResponse.json(
      {
        success: true,
        message: "Customer account created successfully.",
        userId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CUSTOMER REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Unable to create customer account." },
      { status: 500 }
    );
  }
}