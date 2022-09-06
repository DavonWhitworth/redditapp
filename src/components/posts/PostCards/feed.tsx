import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChildData } from "../../../Utils/APIs/apiinterface";

//import Media from "../components/mics/media.tsx";
//: ChildData
function postCard({ post }) {
  console.log(post);
  return (
    <Box bg="primary" padding="10px" marginTop="5px">
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

export default postCard;
