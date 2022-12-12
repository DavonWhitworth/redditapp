import React from "react";
import { Text, Image, Link, Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { ReactTinyLink } from "react-tiny-link";

export default function media(props) {
  const post = props.post;
  const imageReg = /(jpg|png)/gi;
  const videoReg = /video/gi;
  const linkReg = /link/gi;

  const mediaMaxWidth = "400px";
  let isPlaying = false;

  const TogglePlayer = () => {
    console.log("player was = ", { isPlaying });
    isPlaying = !isPlaying;
    console.log("player now is = ", { isPlaying });
  };

  // console.log({ post });

  if (!post.post_hint) {
    console.log("Post_hint = undefined");
    if (post.selftext === "") {
      return <Text>{post.selftext}</Text>;
    } else {
      return <Text>{post.selftext}</Text>;
    }
  } else if (post.url.match(imageReg) !== null)
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
  else if (post.post_hint.match(videoReg) !== null)
  try{
    return (
      <Box display="flex" width="100%" onClick={TogglePlayer}>
        <ReactPlayer
          url={post.media.reddit_video.dash_url}
          width="100%"
          maxWidth={mediaMaxWidth}
          playing={true}
          
        />
      </Box>
    );}
    catch(e){
  console.log(e, post, post.post_hint, post.secure_media.reddit_video.dash_url)
    }
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
