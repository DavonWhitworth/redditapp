import "./App.css";
import PostCard from "./components/postbuilder.tsx";
import ApiCaller from "./components/apicaller.tsx";

function App() {
  //<PostCard apireturn={ApiCaller} />;
  return (
    //apicallreturn used as call back to map posts into usestate
    <div className="App">
      <PostCard />
    </div>
  );
}

export default App;
