import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const subdomain = host.split('.')[0];

  if (subdomain && subdomain !== 'localhost') {
    return NextResponse.rewrite(new URL(`/${subdomain}/menu`, req.url));
  }

  return NextResponse.next();
}
