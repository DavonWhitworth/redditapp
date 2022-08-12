import React from "react";
import axios from "axios";
import { types } from "./types.ts";

const getData = () => {
  const { sortType, sortTime } = types();
  //
  //
  const fetchFeedPost = async (
    name = null,
    SortType = sortType.hot,
    currentSortTime = sortTime.day
  ) => {
    let data;
    console.log("11111", name);
    if (name) {
      data = await axios.get(
        `https://www.reddit.com/r/${name}/${SortType}/.json?t=${currentSortTime}`
      );
    } else if (!name) {
      data = await axios.get(
        `https://www.reddit.com/${SortType}/.json?t=${currentSortTime}`
      );
    }
    return data;
  };

  return {
    fetchFeedPost,
  };
};

export { getData };
