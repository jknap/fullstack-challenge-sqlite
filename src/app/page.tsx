"use client";

import { trpcReact } from "@/trpc/trpcReact";
import { Typography } from "@mui/material";
import { PostsList } from "./components/PostsList";

// TODO (SSG): Implement static generation (SSG) for initial page load and SEO optimization
// Use getStaticProps to fetch data at build time
// That strategy might be actually more important for the specific /posts/:postId page
// Another options is to implement incremental static regeneration (ISR)
// See https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration

export default function Home() {
  // TODO (Performance): Add pagination to improve performance (limit and offset)
  // Can also use useInfiniteQuery from trpc
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
      {/* TODO (Performance): Add a pagination component or infinite scroll to improve performance */}
      <PostsList posts={posts} onAddComment={handleAddComment} />
    </main>
  );
}
