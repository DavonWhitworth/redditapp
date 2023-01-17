import React, { useContext } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Button } from "antd";
import { AppContext } from "../../../AppContext";

export default function BottomBanner(props) {
  const { appData, setAppData } = useContext(AppContext);

  return (
    <Flex gap="12px" marginTop="12px">
      <Text variant="ups" display="flex" textAlign="left" direction="row">
        <ArrowUpIcon />
        {props.post.ups}
        <ArrowDownIcon />
      </Text>
      {appData.pageType === "feed" ? (
        <Button
          onClick={() => {
            setAppData((prevState) => ({
              ...prevState,
              postToView: props.post.permalink,
              pageType: "postWithComment",
            }));
          }}
        >
          Comments
        </Button>
      ) : (
        "  "
      )}
    </Flex>
  );
}
