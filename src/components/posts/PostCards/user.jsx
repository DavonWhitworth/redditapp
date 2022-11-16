import React from "react";
import { Link, Text } from "@chakra-ui/react";

export default function user(props) {
  return (
    <Link display="flex" variant="user" fontSize="12px">
      <Text href="https://www.google.com/" variant="user">
        u/{props.user}
      </Text>
    </Link>
  );
}
