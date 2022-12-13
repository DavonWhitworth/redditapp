import React from "react";
import { Text, Image, Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { ReactTinyLink } from "react-tiny-link";

export default function media(props) {
  const post = props.post;
  // const imageReg = /(jpg|png)/gi;
  // const videoReg = /video/gi;
  // const linkReg = /link/gi;

  const mediaMaxWidth = "400px";
  let isPlaying = false;

  const TogglePlayer = () => {
    console.log("player was = ", { isPlaying });
    isPlaying = !isPlaying;
    console.log("player now is = ", { isPlaying });
  };

  console.log({ post }, post.post_hint);

  if (!post.post_hint) {
    console.log("Post_hint = undefined");
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
      />
    );
  else if (post.post_hint === "hosted:video")
  
    return (
      <Box display="flex" width="100%" onClick={TogglePlayer}>
        <ReactPlayer
          url={post.media.reddit_video.dash_url}
          fallback={post.media.reddit_video.fallback_url}
          width="100%"
          maxWidth={mediaMaxWidth}
          autoplay= {true}
          loop={true}
          
        />
        
      </Box>
    );
  else
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
