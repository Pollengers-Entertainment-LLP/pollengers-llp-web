import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // List of wrong or alternative URLs you want to auto-fix
  const redirects: Record<string, string> = {
    '/theband': '/the-band',
    '/band': '/the-band',
    '/pollengers': '/the-band',
    '/aboutband': '/the-band',
    '/about-band': '/the-band',
    '/profile/pollengers': '/the-band',
    '/artists/pollengers': '/the-band',
  };

  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/theband',
    '/band',
    '/pollengers',
    '/aboutband',
    '/about-band',
    '/profile/pollengers',
    '/artists/pollengers',
  ],
};
