import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCaller = async () => {
  const [datajson, setdatajson] = useState<any>();
  console.log("caller console.log");
  const data = await axios.get("https://www.reddit.com/.json");
  setdatajson(data.data);
  console.log("The data: ", JSON.stringify(datajson));

  return datajson;
};

export default ApiCaller;
