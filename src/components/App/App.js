import "./App.styles.css";
import { Board } from "../Board/Board";
import { Search } from "../Search/Search";

const App = () => {
  return (
    <div className="app">
      <div className="app__header-title-container">
        <h1 className="app__header-title">WebconNote</h1>
        <Search></Search>
      </div>
      <Board></Board>
    </div>
  );
};

export default App;
