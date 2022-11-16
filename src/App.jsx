import "./App.css";
import Posts from "./components/posts/index";
import { Flex } from "@chakra-ui/react";

/* <Posts feedName={'jokes'} currentCardType={postCardTypes.feed}/> */
function App() {
  return (
    <Flex viariant="App">
      <Posts />
    </Flex>
  );
  //<Posts currentCardType={postCardTypes.feed} />
}

export default App;
