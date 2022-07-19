import React from "react";
import axios from "axios";

const ApiCaller = (props) => {
  let datajson;
  let datastring;

  const AxiosCall = async () => {
    datajson = await axios("https://www.reddit.com/.json");
    datastring = JSON.stringify(datajson);
  };
  console.log(datastring);
  return datastring;
};

export default ApiCaller;
