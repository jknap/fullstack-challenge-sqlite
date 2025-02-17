import styled from "@emotion/styled";
import { PostItem } from "./PostItem";
import { PostType } from "@/trpc/trpcRouter";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
`;

export function PostsList({
  posts,
  onAddComment,
}: {
  posts: PostType[];
  onAddComment: (postId: number, comment: string) => void;
}) {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onAddComment={onAddComment} />
      ))}
    </PostsContainer>
  );
}
