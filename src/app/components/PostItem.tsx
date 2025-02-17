import { Post } from "@prisma/client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { PostType } from "@/trpc/trpcRouter";
import { useState } from "react";

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

const CommentSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

const CommentsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Comment = styled.div`
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: white;
  border-radius: 0.25rem;
  font-size: 0.9rem;
`;

export function PostItem({ post }: { post: PostType }) {
  const [commentsVisible, setCommentsVisible] = useState(false);
  return (
    <StyledPost key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.comments.length > 0 && (
        <CommentSection>
          <CommentsSectionHeader>
            <Typography variant="h6" component={"h3"}>
              Comments ({post.comments.length})
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCommentsVisible(!commentsVisible)}
            >
              {commentsVisible ? "Hide Comments" : "Show Comments"}
            </Button>
          </CommentsSectionHeader>
          {commentsVisible &&
            post.comments.map((comment) => (
              <Comment key={comment.id}>{comment.content}</Comment>
            ))}
        </CommentSection>
      )}
    </StyledPost>
  );
}
