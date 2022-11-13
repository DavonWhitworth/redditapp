import React from "react";
import { Box, Text } from "@chakra-ui/react";
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
      margin="5px"
      border="1px"
      borderColor="secondary"
      maxWidth="600px"
    >
      <Subreddit post={post} />
      <Username user={post.author} />
      <Text variant="title">{post.title}</Text>
      <Text variant="ups">
        <ArrowUpIcon />
        {post.ups}
      </Text>
      <Rewards rewardList={post.all_awardings} />
      <Media post={post} />
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
