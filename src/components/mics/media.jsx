import React from "react";
import { Text, Image, Link, Box } from "@chakra-ui/react";

export default function media(props) {
  const post = props.post;

  if (post.post_hint === undefined) {
    console.log("Post_hint = undefined");
    return (
      <Link href={post.url} variant="media0">
        <Text variant="media0">{post.url}</Text>
      </Link>
    );
  }
  let postType = JSON.stringify(post.post_hint);
  postType = postType.substring(1, postType.split("").length - 1);

  console.log(postType);

  const mediaReturn = () => {
    console.log(postType);
    switch (postType) {
      case "image":
        return (
          <Image
            bg="red"
            alt="picture for post"
            src={post.url}
            maxWidth="500"
          />
        );
      case "link":
        return (
          <Link hred={post.url} vartiant="media">
            URL: {post.url}
          </Link>
        );
      case "self":
        return <Text variant="media">{post.selftext}</Text>;
      // case "hosted:video":
      default:
        return <Text>Nothing Happened in media component</Text>;
    }
  };

  return (
    <Box variant="mediaHead" alignItems="center" textAlign="center">
      {mediaReturn()}
    </Box>
  );
}
