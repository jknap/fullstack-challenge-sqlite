import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { trpcRouter } from "../../../../trpc/trpcRouter";

// TODO (Monitoring): Implement request logging (e.g., Winston, Logflare) to track API usage.
// TODO (Monitoring): Add error tracking with Sentry to capture unhandled exceptions.
// TODO (Monitoring): Measure API response time using Prometheus or Datadog for performance monitoring.
// TODO (Monitoring): Log slow database queries in Drizzle/PostgreSQL using pg_stat_statements.
// TODO (Monitoring): Integrate Vercel Analytics or OpenTelemetry for tracking request trends.

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: trpcRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> {
      return {};
    },
  });
};

export { handler as GET, handler as POST };
