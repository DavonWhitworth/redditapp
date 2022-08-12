import React from "react";
import axios from "axios";
import { types } from "./types.ts";

const getData = () => {
  const { sortType, sortTime } = types();
  //
  //
  const fetchFeedPosts = async (
    name = null,
    SortType = sortType.hot,
    currentSortTime = sortTime.day
  ) => {
    let data;
    try{
      if (name) {
        data = await axios.get(
          `https://www.reddit.com/r/${name}/${SortType}/.json?t=${currentSortTime}`
        );
      } else if (!name) {
        data = await axios.get(
          `https://www.reddit.com/${SortType}/.json?t=${currentSortTime}`
        );
      }
    } catch (error){
      console.log(error);
      return null;
    }
    return data;
  };


  return {
    fetchFeedPosts,
  };
};

export { getData };
