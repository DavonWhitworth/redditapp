import "./App.css";
import Posts from "./components/posts/index";

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
