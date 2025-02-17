import { Post } from "@prisma/client";
import styled from "@emotion/styled";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 500px;
`;

export function PostItem({ post }: { post: Post }) {
  return (
    <StyledPost key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </StyledPost>
  );
}
