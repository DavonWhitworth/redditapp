import React, { useState, useEffect } from "react";

//componets
import FeedPostCard from "./PostCards/feed.tsx";
import LoadingScreen from "../mics/loadingScreen.tsx";

//mics
import { getData } from "../../Utils/APIs/index.ts";
import { types } from "./types.ts";
const { postCardTypes } = types();

const Posts = ({ feedName, currentCardType = postCardTypes.feed }) => {
  const [postsData, setPostsData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchFeedPost } = getData();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFeedPost(feedName);
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
  switch (currentCardType) {
    case postCardTypes.feed: {
      return (
        <div>
          {postsData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
    case postCardTypes.user: {
      return (
        <div>
          {postsData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
    case postCardTypes.postWithComment: {
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
