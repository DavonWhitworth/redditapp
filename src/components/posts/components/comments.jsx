import { Text, Box } from "@chakra-ui/react";
import Username from "../PostCards/user";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

export default function comments({ comment, key }) {
  console.log({ comment });
  return (
    <Box
      bg="primary"
      margin="0px, 30px"
      padding="10px"
      border="1px"
      borderColor="secondary"
      width="auto"
      maxWidth="600px"
      gap={3}
      border-radius="6px"
    >
      <Username user={comment.author} />
      <Text
        display="flex"
        textAlign="left"
        margin="10px 0px"
        width="95%"
        marginLeft="12px"
        maxWidth="auto"
        flexDirection="column"
      >
        <div>
          {comment.body}
          <br />
          <br />
          <ArrowUpIcon />
          {comment.ups}
          <ArrowDownIcon />
        </div>
      </Text>
    </Box>
  );
}
