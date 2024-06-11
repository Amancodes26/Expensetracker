// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// Config to match all routes except Next.js internals, static files, and API routes.
export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)', '/', '/(api|trpc)(.*)'],
};
