import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function postCard({ post }) {
  return (
    <Box 
    bg="primary"
    padding='10px'
    marginTop='5px'
    >
      <Text variant="title">{post.title}</Text>


      {/* 
      <Username username={post.author}/>
      <Rewards rewards={post.rewards}/>
      <Media post={posts}/>
      <BottomBanner post={post}/> />
      */}

      
    </Box>
  );
}
