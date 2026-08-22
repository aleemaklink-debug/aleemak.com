import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/api/admin/login") ||
    pathname.startsWith("/api/admin/logout")
  ) {
    return NextResponse.next()
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const token = request.cookies.get("admin_session")?.value
    const secret = process.env.JWT_SECRET

    if (!token || !secret) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        )
      }

      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      )
    }

    try {
      const decoded = jwt.verify(token, secret) as { role?: string }

      if (decoded.role !== "admin") {
        throw new Error("Invalid role")
      }

      return NextResponse.next()
    } catch {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        )
      }

      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
