import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [datajson, setdatajson] = useState(undefined);
  const [datastring, setdatastring] = useState(undefined);

  const AxiosCall = async () => {
    let data = await axios("https://www.reddit.com/.json");
    setdatajson(data);
    setdatastring(JSON.stringify(datajson));
    console.log(data);
  };

  useEffect(() => {
    AxiosCall();
  }, []);

  useEffect(() => {
    console.log("changed data");
  }, [datastring]);

  return <>{datastring}</>;
};

export default App;
