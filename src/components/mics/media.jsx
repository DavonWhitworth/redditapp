import React from "react";
import { Text, Image, Link, Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function media(props) {
  const post = props.post;

  if (post.post_hint === undefined) {
    console.log("Post_hint = undefined");
    return (
      <Link href={post.url} variant="media0">
        <Text variant="media0">Hint is undefined {post.url}</Text>
      </Link>
    );
  }
  let postType = JSON.stringify(post.post_hint);
  postType = postType.substring(1, postType.split("").length - 1);
  const imageReg = /(jpg|png)/gi;
  const videoReg = /hosted:video/gi;
  const linkReg = /link/gi;

  const ImageReturn = ({ post }) => {
    console.log("image is running");
    return (
      <Image bg="red" alt="picture for post" src={post.url} maxWidth="500" />
    );
  };
  const LinkReturn = () => {
    return <Link href={post.url}>linkreturn function {post.url}</Link>;
  };
  const VideoReturn = () => {
    return <ReactPlayer link={post.url} thumbnail={post.thumbnail} />;
  };

  const mediaReturn = () => {
    console.log({ post }, { postType }, post.url.match(imageReg));
  };

  if (post.url.match(imageReg) !== null) <ImageReturn />;
  else if (post.post_hint.match(linkReg) !== null) <LinkReturn />;
}
