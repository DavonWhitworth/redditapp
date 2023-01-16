import { useState, useMemo } from "react";
import "./App.css";
import Posts from "./components/posts/index";
import { Flex } from "@chakra-ui/react";
import { AppContext } from "./AppContext";
import NavBar from "./components/mics/NavBar.jsx";
import SubModal from "./components/mics/SubRedditModal";

function App() {
  const [appData, setAppData] = useState({
    pageType: "feed",
    postToView: null,
    subReddit: null,
    sortType: null ?? "rising",
    sortTime: null ?? "year",
    isLoading: true,
    modalOpen: false,
  });

  const providerValue = useMemo(
    () => ({ appData, setAppData }),
    [appData, setAppData]
  );

  return (
    <Flex viariant="App" direction="column">
      <AppContext.Provider value={providerValue}>
        <SubModal />
        <NavBar />
        <Posts />
      </AppContext.Provider>
    </Flex>
  );
}

export default App;
