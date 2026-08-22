import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        id,
        name,
        phone,
        email,
        subject,
        message,
        status,
        created_at
      FROM contact_messages
      ORDER BY created_at DESC, id DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("CONTACT GET ERROR:", error);

    return NextResponse.json(
      { error: "Failed to load enquiries" },
      { status: 500 }
    );
  }
}