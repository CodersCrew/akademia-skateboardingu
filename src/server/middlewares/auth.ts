// import { authenticate } from 'auth-provider';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // const isAuthenticated = authenticate(request);

  // if (isAuthenticated) {
  return NextResponse.next();
  // }

  // return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/dashboard/:path*'
};
