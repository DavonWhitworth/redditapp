import React from "react";
import { Text, Box, Image, Flex } from "@chakra-ui/react";

export default function rewards(props) {
  return (
    <Box variant="rewards">
      <Text variant="rewardcount" display="flex">
        Rewards &nbsp;
        {props.rewardList.length}
      </Text>
      <Flex
        variant="rewards"
        align="flex-start"
        border="5px"
        wrap="wrap"
        marginBottom="12px"
      >
        {props.rewardList.map((awardListing, key) => {
          return (
            <Image
              variant="rewards"
              src={awardListing.icon_url}
              atl={awardListing.name}
              boxSize="40px"
              bg="primary"
              key={key}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
