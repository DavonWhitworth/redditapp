import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Username from "./user";
import Rewards from "../components/rewards";
import Media from "../../mics/media";
import Subreddit from "./subreddit";

//import Media from "../components/mics/media.tsx";

function postCard({ post }) {
  // console.log({ post });
  return (
    <Box
      variant="post"
      bg="primary"
      margin="0px, 30px"
      border="1px"
      borderColor="secondary"
      width="auto"
      maxWidth="600px"
    >
      <Flex direction="column">
        <Subreddit post={post} />
        <Username user={post.author} />
      </Flex>
      <Text variant="title" display="flex" textAlign="left">
        {post.title}
      </Text>

      <Rewards rewardList={post.all_awardings} display="flex" align="left" />
      <Media post={post} />
      <Text variant="ups" display="flex" textAlign="left">
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
      <BottomBanner post={post}/> />
      */
