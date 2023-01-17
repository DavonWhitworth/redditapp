import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";

//componets
import FeedPostCard from "./PostCards/feed";
import LoadingScreen from "../mics/loadingScreen";
import PostView from "./PostCards/postView";

//mics
import { getData } from "../../Utils/APIs/index";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { fetchFeedPosts } = getData();
  const { appData, setAppData } = useContext(AppContext);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFeedPosts();

        setAppData((prevState) => ({
          ...prevState,
          pageData: data,
        }));
        setIsLoading(false);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
    console.log("fetching post");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appData.subReddit, appData.sortType, appData.sortTime, appData.pageType]);

  if (isLoading) return <LoadingScreen />;
  if (appData.pageType === "feed" && appData.pageData.data.length === 2)
    return <div>{"   "}</div>;

  switch (appData.pageType) {
    case "feed": {
      return (
        <div>
          {appData.pageData?.data.data.children.map((post, key) => {
            return <FeedPostCard key={key} post={post.data} />;
          })}
        </div>
      );
    }
    case "postWithComment": {
      return <PostView />;
    }
    default:
      return <div>Post Default Page</div>;
  }
};

export default Posts;
