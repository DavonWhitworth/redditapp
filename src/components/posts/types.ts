const types = () => {
  const postCardTypes = {
    feed: "feed",
    user: "user",
    postWithComment: "postWithComment",
  };

  const datatypes = {
    feedName: "name",
  };

  return {
    postCardTypes,
    datatypes,
  };
};

export type PostKeyType = "number";
export type PostInfoType = "post";

export { types };

interface postdata {}
