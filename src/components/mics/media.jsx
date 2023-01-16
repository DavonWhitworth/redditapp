import React from "react";
import { Text, Image, Box } from "@chakra-ui/react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import { ReactTinyLink } from "react-tiny-link";

export default function media(props) {
  const post = props.post;
  const mediaMaxWidth = "400px";

  if (!post.post_hint) {
    if (post.selftext === "") {
      return <Text>{post.selftext}</Text>;
    } else {
      return <Text>{post.selftext}</Text>;
    }
  } else if (post.post_hint === "image")
    return (
      <Image
        variant="media"
        color="secondary"
        bg="primary"
        alt="picture for post"
        src={post.url}
        maxHeight="1000"
        width="100%"
        maxWidth={mediaMaxWidth}
        display="flex"
        margin="auto"
      />
    );
  else if (post.post_hint === "hosted:video")
    return (
      <Box display="flex" width="100%" height="400px">
        <Player
          src={post.media.reddit_video.fallback_url}
          poster="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4697815.png"
          dimensions={{ width: "100%", height: "100%" }}
        />
      </Box>
    );
  else
    try {
      return (
        <ReactTinyLink
          url={post.url}
          cardSize="large"
          showGraphic={true}
          maxWidth={mediaMaxWidth}
          width="100%"
        />
      );
    } catch (e) {
      return (
        <ReactTinyLink
          url={post.url}
          cardSize="large"
          showGraphic={true}
          maxWidth={mediaMaxWidth}
          width="100%"
        />
      );
    }
}
