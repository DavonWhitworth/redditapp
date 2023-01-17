import { useContext } from "react";
import { AppContext } from "../../AppContext";

import axios from "axios";

//context data

const GetData = () => {
  const { appData } = useContext(AppContext);

  const fetchFeedPosts = async (
    name = appData.subReddit,
    SortType = appData.sortType,
    currentSortTime = appData.sortTime,
    pageType = appData.pageType,
    postLinkEnd = appData.postToView
  ) => {
    let data;
    try {
      if (pageType === "postWithComment") {
        console.log(
          "Link to post: ",
          `https://www.reddit.com/${postLinkEnd}.json`
        );
        data = await axios.get(`https://www.reddit.com/${postLinkEnd}.json`);
      } else if (name) {
        data = await axios.get(
          `https://www.reddit.com/r/${name}/${SortType}/.json?t=${currentSortTime}`
        );
      } else if (!name) {
        data = await axios.get(
          `https://www.reddit.com/${SortType}/.json?t=${currentSortTime}`
        );
      }
    } catch (error) {
      console.log(error);
      return null;
    }

    return data;
  };

  return {
    fetchFeedPosts,
  };
};

export { GetData as getData };
