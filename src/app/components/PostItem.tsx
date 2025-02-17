import { Post } from "@prisma/client";

export function PostItem({ post }: { post: Post }) {
  return <div>{post.title}</div>;
}
