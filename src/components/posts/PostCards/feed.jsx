import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import Username from "./user";
import Rewards from "../components/rewards";
import Media from "../../mics/media";
import Subreddit from "./subreddit";
import BottonBanner from "./bottomBanner";

//import Media from "../components/mics/media.tsx";

function postCard({ post }) {
  // console.log({ post });
  return (
    <Box
      variant="post"
      bg="primary"
      margin="0px, 30px"
      padding="10px"
      border="1px"
      borderColor="secondary"
      width="auto"
      maxWidth="600px"
      gap={3}
    >
      <Flex direction="column">
        <Subreddit post={post} />
        <Username user={post.author} />
      </Flex>
      <Text variant="title" display="flex" textAlign="left" margin="10px 0px">
        {post.title}
      </Text>

      <Rewards rewardList={post.all_awardings} display="flex" align="left" />
      <Media post={post} />
      <BottonBanner post={post} />
    </Box>
  );
}

export default postCard;

/* 
INSIDE THE BOX

      <Rewards rewards={post.rewards}/>
      <BottomBanner post={post}/> />
      */
