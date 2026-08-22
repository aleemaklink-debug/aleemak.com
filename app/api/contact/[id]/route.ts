import { NextResponse } from 'next/server'
import db from '@/lib/db'

const allowedStatuses = ['new', 'read', 'replied', 'closed']

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const data = await request.json()
    const status = String(data.status || '').trim()

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 },
      )
    }

    const [result] = await db.query(
      `
        UPDATE contact_messages
        SET status = ?
        WHERE id = ?
      `,
      [status, id],
    )

    const affectedRows =
      (result as { affectedRows?: number }).affectedRows ?? 0

    if (!affectedRows) {
      return NextResponse.json(
        { error: 'Enquiry not found' },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      status,
    })
  } catch (error) {
    console.error('CONTACT STATUS API ERROR:', error)

    return NextResponse.json(
      { error: 'Failed to update enquiry status' },
      { status: 500 },
    )
  }
}