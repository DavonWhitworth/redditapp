import React, { useContext } from "react";
import { Box, Text, Flex, Image, Link } from "@chakra-ui/react";

import Username from "./user";
import Rewards from "../components/rewards";
import Media from "../../mics/media";
import Subreddit from "./subreddit";
import BottonBanner from "./bottomBanner";
import RedditIcon from "../../../Utils/files/redditIcon.png";
import { AppContext } from "../../../AppContext";

function PostCard({ post }) {
  const { appData } = useContext(AppContext);

  // console.log({ post }, post.title);
  const linkToRedditPost = "https://www.reddit.com/" + post.permalink;

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
      <Flex direction="row">
        <Box>
          <Subreddit post={post} />
          <Username user={post.author} />
        </Box>
        <Link target="_blank" href={linkToRedditPost} marginLeft="auto">
          <Image width="30px" src={RedditIcon} />
        </Link>
      </Flex>
      <Text
        variant="title"
        display="flex"
        textAlign="left"
        margin="10px 0px"
        width="100%"
      >
        {post.title}
      </Text>
      <Rewards rewardList={post.all_awardings} display="flex" align="left" />
      <Media post={post} />
      <BottonBanner post={post} />
    </Box>
  );
}

export default PostCard;
