import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

function getExpectedToken(): string {
  return crypto
    .createHash("sha256")
    .update(`admin_secret_${ADMIN_PASSWORD}_salt_aardhya`)
    .digest("hex");
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("admin_session");
  const expectedToken = getExpectedToken();

  if (cookie && cookie.value === expectedToken) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Password is required" },
        { status: 400 }
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Incorrect admin password. Please try again." },
        { status: 401 }
      );
    }

    const token = getExpectedToken();

    const response = NextResponse.json({
      success: true,
      message: "Admin authentication successful",
    });

    response.cookies.set({
      name: "admin_session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Authentication error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.delete("admin_session");

  return response;
}
