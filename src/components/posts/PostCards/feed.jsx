import React, { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Username from "./user";

//import Media from "../components/mics/media.tsx";

function postCard({ post }) {
  console.log(post);
  return (
    <Box bg="primary" padding="10px" marginTop="5px">
      <Username user={post.author} />
      <Text color="secondary" variant="title">
        {post.title}
      </Text>
      <Text color="secondary" variant="ups">
        <ArrowUpIcon />
        {post.ups}
      </Text>
    </Box>
  );
}

//REWARDS NEXT  https://github.com/androiddevnotes/reddit-awards

export default postCard;
/*
Structure:
sub - username - post life
title
media or text (expandable post and/or different window)
*/
/* 
INSIDE THE BOX

      <Rewards rewards={post.rewards}/>
      <Media post={posts}/>
      <BottomBanner post={post}/> />
      */
