import React from "react";
import { Text, Box, Image, Link } from "@chakra-ui/react";

export default function subreddit(props) {
  return (
    <Link variant="subreddit" display="flex">
      <Text variant="subreddit" fontSize="17px">
        {props.post.subreddit_name_prefixed}
      </Text>
    </Link>
  );
}
