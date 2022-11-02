import React, { useState, useEffect, useContext, ReactElement } from "react";

//componets
import FeedPostCard from "./PostCards/feed";
import LoadingScreen from "../mics/loadingScreen";

//mics
import { getData } from "../../Utils/APIs/index";

const Posts = ({
  /*currentFeedName = datatypes.feedName, 
  FeedName not used but could be. When viewing a sub, there is a seperate listing of the subname outside of any post*/
  currentCardType,
}) => {
  const [postsData, setPostsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchFeedPosts } = getData();
  const cardType = "feed"; //will delete this and set {currentCardType} as switch statment argument but until new pages are added, will only show feed posts

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFeedPosts();
        setPostsData(data);
        setIsLoading(false);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
    console.log("fetching post");
  }, []);

  if (isLoading) return <LoadingScreen />;
  switch (cardType) {
    case "feed": {
      return (
        <div>
          {postsData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
    case "user": {
      return (
        <div>
          {postsData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
    case "postWithComment": {
      return (
        <div>
          {postsData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
  }
};

export default Posts;
