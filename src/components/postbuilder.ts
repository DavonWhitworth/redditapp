import React from "react";
import Data from "../data.json";

/*
title = selftext
subreddit = subreddit

*/

const PostCard = () => {
  const datastring = JSON.stringify(Data.data.children[0].data.ups);
  return datastring;
};

export default PostCard;
