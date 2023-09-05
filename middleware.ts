import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const routePaths = ['/todos', '/account'];
const routeApis = ['todos', 'orders', 'claims'];

const checkProtectedRoute = (path: string) => routePaths.some((r) => path.startsWith(r));
const checkProtectedEndPoint = (path: string) => routeApis.some((r) => path.startsWith(`/api/${r}`));

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (checkProtectedRoute(req.nextUrl.pathname) && !session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  } else if (checkProtectedEndPoint(req.nextUrl.pathname) && !session) {
    return NextResponse.redirect('/api/auth');
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets).*)'],
};
