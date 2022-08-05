import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "./data.json";
//import ApiCaller from "./apicaller.tsx";

const Card = styled.div`
  max-width: 400px;
  flex-wrap: wrap;
`;

const Title = styled.header`
  color: blue;
`;
const Upvotes = styled.p`
  color: orange;
`;
const Sub = styled.p`
  color: silver;
`;

interface PostForm {
  title: string;
  subreddit: string;
  ups: string;
}

interface PostCard {}

const PostCard = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const apiResponse = Data;
  //console.log("Data in use = ", apiResponse);
  const [postdata, setpostdata] = useState<PostForm[]>([]);
  const [postCards, setPostCards] = useState<PostCard[]>([]);

  //apiResponse.data.dist

  const getPosts = (): void => {
    // const numberofpostsindata: number = parseInt(
    //   JSON.stringify(apiResponse.data.dist)
    // );

    for (let i = 0; i < 10; i++) {
      const title: string = JSON.stringify(
        apiResponse.data.children[i].data.title
      );
      const ups: string = JSON.stringify(apiResponse.data.children[i].data.ups);
      const subpage: string = JSON.stringify(
        apiResponse.data.children[i].data.subreddit
      );

      const newcard: PostForm = {
        title: title,
        subreddit: subpage,
        ups: ups,
      };

      setpostdata((prevdata) => [...prevdata, newcard]);
    }

    //for (let i = 0; i < postdata.length; i++) {
    const temp: PostCard = makePostCards(postdata[1]);
    setPostCards(temp);
    //setPostCards((prevcards) => [...prevcards, temp]);
    //}
  };

  const makePostCards = (post: PostForm) => {
    return;
    // <Card>
    //   <Title>{post.title}</Title>
    //   <Sub>{post.subreddit}</Sub>
    //   <Upvotes>{post.ups}</Upvotes>
    // </Card>
  };

  console.log("postdata: ", postdata);

  return;
};

export default PostCard;
