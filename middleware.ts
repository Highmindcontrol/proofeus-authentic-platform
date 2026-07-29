import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "proofeus_authentic_gate";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/gate" || pathname === "/api/gate") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === "1") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/gate";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.png|apple-touch-icon.png|.*\\..*).*)",
  ],
};
