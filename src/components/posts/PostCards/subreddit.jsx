import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";

import { Text } from "@chakra-ui/react";

export default function Subreddit(props) {
  const { setAppData } = useContext(AppContext);
  return (
    <Text
      variant="subreddit"
      fontSize="18px"
      onClick={() =>
        setAppData((prevState) => ({
          ...prevState,
          subReddit: props.post.subreddit,
        }))
      }
    >
      {props.post.subreddit_name_prefixed}
    </Text>
  );
}
