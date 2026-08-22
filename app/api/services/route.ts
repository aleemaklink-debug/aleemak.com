import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        id,
        title,
        slug,
        short_description,
        description,
        icon,
        display_order,
        is_active
      FROM services
      WHERE is_active = 1
      ORDER BY display_order ASC, id ASC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("SERVICES API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to load services" },
      { status: 500 }
    );
  }
}