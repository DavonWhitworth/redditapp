import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCaller = () => {
  const [datajson, setdatajson] = useState();
  const [datastring, setdatastring] = useState("");

  const AxiosCall = async () => {
    var data = await axios("https://www.reddit.com/.json");
    setdatajson(data);
    setdatastring(JSON.stringify(datajson));
    console.log("The data called", data);
  };

  useEffect(() => {
    AxiosCall();
  }, []);

  useEffect(() => {
    console.log("changed data");
  }, [datastring]);
  return datastring;
};

export default ApiCaller;
