import "./App.css";
import Posts from "./components/posts/index";

//temp testing
import { types } from "./components/posts/types";
const { postCardTypes } = types();

/* <Posts feedName={'jokes'} currentCardType={postCardTypes.feed}/> */
function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
  //<Posts currentCardType={postCardTypes.feed} />
}

export default App;
