import { Text } from "@chakra-ui/react";
import Username from "../PostCards/user";
import styled from "styled-components";

const CommentContainer = styled.div`
  background-color: grey;
  display: "flex";
  margin: 24px;
`;

export default function comments({ comment, key }) {
  return (
    <CommentContainer>
      <Username user={comment.author} />
      <p
        variant="title"
        display="flex"
        textAlign="left"
        margin="10px 0px"
        width="100%"
      >
        {comment.body}
      </p>
    </CommentContainer>
  );
}
