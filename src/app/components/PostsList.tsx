import { Post } from "@prisma/client";
import styled from "@emotion/styled";
import { PostItem } from "./PostItem";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
`;

export function PostsList({ posts }: { posts: Post[] }) {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostsContainer>
  );
}
