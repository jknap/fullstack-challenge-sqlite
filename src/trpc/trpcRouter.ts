import { prismaClient } from "../../prisma/prismaClient";
import { inferRouterOutputs, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";

const t = initTRPC.create({
  transformer: superjson,
});

export const trpcRouter = t.router({
  // TODO (Performance): Add pagination to improve performance (limit and offset)
  // Can also use useInfiniteQuery from trpc
  getPosts: t.procedure.query(async ({ ctx, input }) => {
    return await prismaClient.post.findMany({
      include: {
        comments: true,
      },
    });
  }),
  addComment: t.procedure
    .input(
      z.object({
        postId: z.number(),
        comment: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { postId, comment } = input;
      const post = await prismaClient.post.findUnique({
        where: { id: postId },
      });
      if (!post) {
        throw new Error("Post not found");
      }
      const newComment = await prismaClient.comment.create({
        data: { content: comment, postId: postId },
      });
      return newComment;
    }),
});

export type TrpcRouter = typeof trpcRouter;
type RouterOutput = inferRouterOutputs<TrpcRouter>;
export type PostType = RouterOutput["getPosts"][0];
