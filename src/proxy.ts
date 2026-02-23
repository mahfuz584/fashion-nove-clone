import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}/women`, request.url),
    );
  }

  const locale = routing.locales.find((loc) => pathname === `/${loc}`);

  if (locale) {
    return NextResponse.redirect(new URL(`/${locale}/women`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
