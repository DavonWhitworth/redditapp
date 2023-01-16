import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";

//componets
import FeedPostCard from "./PostCards/feed";
import LoadingScreen from "../mics/loadingScreen";

//mics
import { getData } from "../../Utils/APIs/index";

const Posts = () => {
  const [postsData, setPostsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchFeedPosts } = getData();
  const cardType = "feed"; //will delete
  const { appData, setAppData } = useContext(AppContext);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appData.subReddit, appData.sortType, appData.sortTime]);

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
    case "postWithComment": {
      return (
        <div>
          {postsData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
    default:
      return <div>default case here</div>;
  }
};

export default Posts;
