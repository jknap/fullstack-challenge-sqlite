"use client";

import { trpcReact } from "@/trpc/trpcReact";
import { Typography } from "@mui/material";
import { PostsList } from "./components/PostsList";

export default function Home() {
  const { data: posts } = trpcReact.getPosts.useQuery();
  const addComment = trpcReact.addComment.useMutation();
  const utils = trpcReact.useUtils();

  const handleAddComment = async (postId: number, comment: string) => {
    await addComment.mutateAsync({ postId, comment });
    utils.getPosts.invalidate();
  };

  if (!posts) return null;

  return (
    <main>
      <Typography variant="h4" component={"h1"}>
        Posts
      </Typography>
      <PostsList posts={posts} onAddComment={handleAddComment} />
    </main>
  );
}
