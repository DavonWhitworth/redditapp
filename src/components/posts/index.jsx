import React, { useState, useEffect } from "react";

//componets
import FeedPostCard from "./PostCards/feed";
import LoadingScreen from "../mics/loadingScreen";

//mics
import { getData } from "../../Utils/APIs/index";

const Posts = () =>
  /*{currentFeedName = datatypes.feedName, 
  FeedName not used but could be. When viewing a sub, there is a seperate listing of the subname outside of any post*/
  //currentCardType //will set this to be argument in switch statment when new pages are added, for now only post type "feed" in {cardType} }

  {
    const [postsData, setPostsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { fetchFeedPosts } = getData();
    const cardType = "feed"; //will delete

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
      default:
        return <div>default case here</div>;
    }
  };

export default Posts;
