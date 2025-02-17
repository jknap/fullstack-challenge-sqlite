import { prismaClient } from "../../prisma/prismaClient";
import { inferRouterOutputs, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";

const t = initTRPC.create({
  transformer: superjson,
});

export const trpcRouter = t.router({
  getPosts: t.procedure.query(async ({ ctx, input }) => {
    return await prismaClient.post.findMany({
      include: {
        comments: true,
      },
    });
  }),
});

export type TrpcRouter = typeof trpcRouter;
type RouterOutput = inferRouterOutputs<TrpcRouter>;
export type PostType = RouterOutput["getPosts"][0];
