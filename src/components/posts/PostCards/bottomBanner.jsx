import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

export default function bottomBanner(props) {
  return (
    <Flex>
      <Text variant="ups" display="flex" textAlign="left" direction="row">
        <ArrowUpIcon />
        {props.post.ups}
        <ArrowDownIcon />
      </Text>
    </Flex>
  );
}
