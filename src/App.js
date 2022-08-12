import "./App.css";
import Posts from "./components/posts/index.tsx";

//temp testing
import { types } from "./components/posts/types.ts";
const {postCardTypes} = types();

function App() {
  return (
    <div className="App">
      {/* <Posts feedName={'jokes'} currentCardType={postCardTypes.feed}/> */}
      <Posts currentCardType={postCardTypes.feed}/>
    </div>
  );
}

export default App;
