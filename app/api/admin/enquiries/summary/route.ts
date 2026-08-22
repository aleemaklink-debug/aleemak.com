import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        COUNT(*) AS total,
        SUM(status = 'new') AS new_count,
        SUM(status = 'read') AS read_count,
        SUM(status = 'replied') AS replied_count,
        SUM(status = 'closed') AS closed_count
      FROM contact_messages
    `);

    const row = (rows as any[])[0] || {};

    return NextResponse.json({
      total: Number(row.total || 0),
      new: Number(row.new_count || 0),
      read: Number(row.read_count || 0),
      replied: Number(row.replied_count || 0),
      closed: Number(row.closed_count || 0),
    });
  } catch (error) {
    console.error("ENQUIRY SUMMARY API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to load enquiry summary" },
      { status: 500 }
    );
  }
}