import React from "react";
import { Text, Box, Image, Link } from "@chakra-ui/react";

export default function subreddit(props) {
  return (
    <Link variant="subreddit">
      <Text variant="subreddit">{props.post.subreddit_name_prefixed}</Text>
    </Link>
  );
}
