import React from "react";
import { Link } from "@chakra-ui/react";

export default function user(props) {
  return (
    <Link color="secondary" variant="link">
      u/{props.user}
    </Link>
  );
}
