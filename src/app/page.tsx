"use client";

import { trpcReact } from "@/trpc/trpcReact";
import { Typography } from "@mui/material";
import { PostsList } from "./components/PostsList";

export default function Home() {
  const { data: posts } = trpcReact.getPosts.useQuery();

  if (!posts) return null;

  return (
    <main>
      <Typography variant="h4" component={"h1"}>
        Posts
      </Typography>
      <PostsList posts={posts} />
    </main>
  );
}
