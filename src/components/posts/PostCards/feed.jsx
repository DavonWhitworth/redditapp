import React, { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";


//import Media from "../components/mics/media.tsx";

function postCard({ post }) {
  console.log(post);
  return (
    <Box bg="primary" padding="10px" marginTop="5px">
      <Text variant="title">{post.title}</Text>
    </Box>
  );
}

export default postCard;

/* 
INSIDE THE BOX

      <Username username={post.author}/>
      <Rewards rewards={post.rewards}/>
      <Media post={posts}/>
      <BottomBanner post={post}/> />
      */
 