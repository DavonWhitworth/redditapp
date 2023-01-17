import React, { useState, useContext } from "react";
import { Button } from "antd";

import { AppContext } from "../../../AppContext";
import PostCard from "./feed";
import Comments from "../components/comments";

const PostWithComments = () => {
  const { appData, setAppData } = useContext(AppContext);
  const [post, setPost] = useState(
    appData.pageData?.data[0]?.data?.children[0].data
  );
  const [commentArr, setCommentArr] = useState(
    appData.pageData?.data[1]?.data?.children
  );
  console.log({ commentArr });
  return (
    <div>
      <Button
        onClick={() => {
          setAppData((prevState) => ({
            ...prevState,
            pageType: "feed",
          }));
        }}
      >
        Go Back
      </Button>

      {post ? (
        <div>
          <PostCard post={post} />
          {commentArr.map((comment, key) => {
            return <Comments comment={comment.data} key={key} />;
          })}
        </div>
      ) : (
        <div>still loading</div>
      )}
    </div>
  );
};

export default PostWithComments;
