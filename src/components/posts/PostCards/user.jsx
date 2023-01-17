import React from "react";
import { Text } from "@chakra-ui/react";

export default function User(props) {
  return (
    <Text href="https://www.google.com/" variant="user" fontSize="14px">
      u/{props.user}
    </Text>
  );
}
