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

  // const ImageReturn = ({ post }) => {
  //   console.log("image is running");
  //   return (
  //     <Image bg="red" alt="picture for post" src={post.url} maxWidth="500" />
  //   );
  // };
  // const LinkReturn = ({ post }) => {
  //   return <Link href={post.url}>linkreturn function {post.url}</Link>;
  // };
  // const VideoReturn = ({ post }) => {
  //   return <ReactPlayer link={post.url} thumbnail={post.thumbnail} />;
  // };
  // const DefaultCase = () => {
  //   return <Text variant="mediaDefault">Default, nothing happened</Text>;
  // };

  console.log({ post }, post.url.match(videoReg));

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
    return (
      <Box display="flex" width="100%" onClick={TogglePlayer}>
        <ReactPlayer
          url={post.media.reddit_video.dash_url}
          width="100%"
          playing={true}
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
