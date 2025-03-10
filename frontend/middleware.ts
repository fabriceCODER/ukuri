import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
     const token = request.cookies.get('token')?.value;
     const isAuthPage = request.nextUrl.pathname.startsWith('/login') ||
          request.nextUrl.pathname.startsWith('/register');
     const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard') ||
          request.nextUrl.pathname.startsWith('/admin');

     // Redirect authenticated users away from auth pages
     if (isAuthPage && token) {
          return NextResponse.redirect(new URL('/dashboard', request.url));
     }

     // Redirect unauthenticated users to login page
     if (isProtectedRoute && !token) {
          const loginUrl = new URL('/login', request.url);
          loginUrl.searchParams.set('from', request.nextUrl.pathname);
          return NextResponse.redirect(loginUrl);
     }

     return NextResponse.next();
}

export const config = {
     matcher: [
          '/dashboard/:path*',
          '/admin/:path*',
          '/login',
          '/register',
     ],
}; 