import React, { Context, useContext } from "react";
import axios from "axios";
import { types } from "./types";

//context data
//import { SubTitleContext } from "../../globalStates/userSettings/index.tsx";

const getData = () => {
  const { sortType, sortTime } = types();

  const fetchFeedPosts = async (
    //Need to set up useContext to retrive set parameters
    name = null,
    SortType = sortType.hot,
    currentSortTime = sortTime.day
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

export { getData };
