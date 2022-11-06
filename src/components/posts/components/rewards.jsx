import React from "react";
import { Text, Box, Image, Stack } from "@chakra-ui/react";

export default function rewards(props) {
  // console.log({ props });

  return (
    <Box variant="rewards">
      <Text variant="rewardcount">
        Rewards &nbsp;
        {props.rewardList.length}
      </Text>
      {props.rewardList.map((awardListing) => {
        return (
          <Stack variant="rewards" display="inline-flex" flex-direction="row">
            <Image
              variant="rewards"
              src={awardListing.icon_url}
              atl={awardListing.name}
              boxSize="40px"
              bg="primary"
            />
          </Stack>
        );
      })}
    </Box>
  );
}
