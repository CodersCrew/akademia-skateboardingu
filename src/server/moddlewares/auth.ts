import { NextResponse, NextRequest } from 'next/server';
import { authenticate } from 'auth-provider';

export function middleware(request: NextRequest) {
    const isAuthenticated = authenticate(request);

    if (isAuthenticated) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: '/dashboard/:path*',
};
