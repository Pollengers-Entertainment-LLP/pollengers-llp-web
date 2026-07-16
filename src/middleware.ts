import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const originalPath = req.nextUrl.pathname;

  //ALWAYS allow home page
  if (originalPath === '/') {
    return NextResponse.next();
  }

  // Normalize path: lowercase + remove trailing slash
  const normalizedPath = originalPath
    .toLowerCase()
    .replace(/\/$/, '');

  // Redirect mixed/uppercase or trailing slash URLs
  if (originalPath !== normalizedPath) {
    const url = req.nextUrl.clone();
    url.pathname = normalizedPath;
    return NextResponse.redirect(url, 301);
  }

  // Central redirect map
  const redirectMap: Record<string, string> = {
    '/theband': '/the-band',
    '/band': '/the-band',
    '/pollenger': '/the-band',
    '/pollengers': '/the-band',
    '/aboutband': '/the-band',
    '/about-band': '/the-band',
    '/artist/pollengers': '/the-band',
    '/artists/pollengers': '/the-band',

    '/artist': '/artists',
    '/service': '/services',
    '/contacts': '/contact',
    '/live-shows': '/live',
    '/live-shows-and-appearances': '/live',

  };

  const redirectTarget = redirectMap[normalizedPath];

  if (redirectTarget) {
    const url = req.nextUrl.clone();
    url.pathname = redirectTarget;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'], // keep global
};
