import { useContext } from "react";
import { AppContext } from "../../AppContext";

import axios from "axios";

//context data
//import { SubTitleContext } from "../../globalStates/userSettings/index.tsx";

const GetData = () => {
  const { appData } = useContext(AppContext);

  const fetchFeedPosts = async (
    //Need to set up useContext to retrive set parameters
    name = appData.subReddit,
    SortType = appData.sortType,
    currentSortTime = appData.sortTime
  ) => {
    let data;
    try {
      if (name) {
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
    console.log({ data });
    return data;
  };

  return {
    fetchFeedPosts,
  };
};

export { GetData as getData };
