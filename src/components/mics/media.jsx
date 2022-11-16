import React from "react";
import { Text, Image, Link, Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { ReactTinyLink } from "react-tiny-link";

export default function media(props) {
  const post = props.post;
  const imageReg = /(jpg|png)/gi;
  const videoReg = /video/gi;
  const linkReg = /link/gi;

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

  console.log({ post }, post.url.match(imageReg));

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
        maxWidth="500px"
        display="flex"
      />
    );
  else if (post.post_hint.match(videoReg) !== null)
    <Text display="flex" textAlign="left">
      This is a video
    </Text>;
  else
    return (
      <Link
        variant="media"
        href={post.url}
        color="secondary"
        display="flex"
        textAlign="left"
      >
        Default Return Statment; Link Here
      </Link>
    );
}
