import React, { useState } from "react";
import Data from "./data.json";
import styled from "styled-components";

const Card = styled.div`
  max-width: 400px;
  flex-wrap: wrap;
`;

const Title = styled.header`
  color: blue;
`;
const Upvotes = styled.p`
  color: orange;
`;
const Sub = styled.p`
  color: silver;
`;

const PostCard = () => {
  const [posts, setposts] = useState([]);

  for (let i = 0; i <= Data.data.dist; i++) {
    const subreddit = JSON.stringify(Data.data.children[i].data.subreddit);
    const title = JSON.stringify(Data.data.children[i].data.title);
    const ups = JSON.stringify(Data.data.children[i].data.ups);

    const card = (
      <Card>
        <Sub>{subreddit}</Sub>
        <Title>{title}</Title>
        <Upvotes>{ups}</Upvotes>
      </Card>
    );
    setposts({ card });
  }

  return posts;
};

export default PostCard;
