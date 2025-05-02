import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/profile", "/admin"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
     matcher: ["/dashboard/:path*", "/profile/:path*", "/admin/:path*"],
   };
   
