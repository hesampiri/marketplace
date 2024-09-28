import { auth } from "@/auth";

import {
  publicRoutes,
  privateRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
  productRoute,
  categoryRoute,
} from "@/routes";
import { Session } from "next-auth";
import { NextRequest } from "next/server";

export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {
    const { nextUrl } = req;
    const isLoggedin = !!req.auth;

    const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isProductroute = nextUrl.pathname.startsWith(productRoute);
    const iscategoryRoute = nextUrl.pathname.startsWith(categoryRoute);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
    const isPrivateRoutes = privateRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoutes || isProductroute || iscategoryRoute) return;

    if (isPrivateRoutes) {
      if (isLoggedin) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return;
    }

    if (!isLoggedin && !isPublicRoutes) {
      return Response.redirect(new URL("/auth/signin", nextUrl));
    }

    return;
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
