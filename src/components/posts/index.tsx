import React, { useState, useEffect, useContext } from "react";

//componets
import FeedPostCard from "./PostCards/feed";
import LoadingScreen from "../mics/loadingScreen";

//mics
import { getData } from "../../Utils/APIs/index";
import { types, PostKeyType, PostInfoType } from "./types";
import { ChildData } from "../../Utils/APIs/apiinterface";

const { datatypes, postCardTypes } = types();

const Posts = ({
  currentFeedName = datatypes.feedName,
  currentCardType = postCardTypes.feed,
}) => {
  const [postsData, setPostsData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchFeedPosts } = getData();

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
  switch (currentCardType) {
    case postCardTypes.feed: {
      return (
        <div>
          {postsData?.data.data.children.map(
            (post: ChildData, key: PostKeyType) => {
              return <FeedPostCard key={key} post={post.data} />;
            }
          )}
        </div>
      );
    }
    case postCardTypes.user: {
      return (
        <div>
          {postsData?.data.data.children.map(
            (post: ChildData, key: PostKeyType) => {
              return <FeedPostCard key={key} post={post.data} />;
            }
          )}
        </div>
      );
    }
    case postCardTypes.postWithComment: {
      return (
        <div>
          {postsData?.data.data.children.map(
            (post: ChildData, key: PostKeyType) => {
              return <FeedPostCard key={key} post={post.data} />;
            }
          )}
        </div>
      );
    }
  }
};

export default Posts;

//Case in development and original case to save

/*

case postCardTypes.feed: {
      return (
        <div>
          {postsData?.data.data.children.map(
            (post: PostInfoType, key: PostKeyType) => {
              return <FeedPostCard key={key} post={post.data} />;
            }
          )}
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

*/
